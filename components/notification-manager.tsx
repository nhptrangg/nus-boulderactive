'use client';

import React, { useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { Shirt, CreditCard } from 'lucide-react';
import usePersistedState from '@/hooks/use-persisted-state';

// TODO: Update notifications with reminder per category
const NOTIFICATIONS = [
  {
    id: 'shirt-payment-reminder',
    title: 'Payment Reminder',
    message: "Don't forget to pay for your BA-exclusive shirts if you ordered!",
    type: 'warning',
    icon: Shirt,
    action: {
      label: 'Pay Now',
      icon: CreditCard,
      onClick: () => {
        toast.success('Redirecting to payment portal...');
        setTimeout(
          () => window.location.assign('https://betaspray.cococart.co/#cartPreview'),
          2000,
        );
      },
    },
    showFrom: new Date('2025-09-01'),
    showUntil: new Date('2025-10-02'),
  },
];

const STORAGE_KEY = 'dismissed-notifications';

export function NotificationManager() {
  const [dismissedNotifications, setDismissedNotifications] = usePersistedState(STORAGE_KEY, []);
  const hasShownNotifications = useRef(false);

  useEffect(() => {
    const now = new Date();

    // Only show notifications once per page load
    if (hasShownNotifications.current) return;

    // Filter out already dismissed notifications
    const notificationsToShow = NOTIFICATIONS.filter(
      notification =>
        !dismissedNotifications.includes(notification.id) &&
        notification.showFrom < now &&
        notification.showUntil > now,
    );

    // Show each notification that hasn't been dismissed
    notificationsToShow.forEach(notification => {
      const IconComponent = notification.icon;

      setTimeout(() =>
        toast(notification.title, {
          id: notification.id,
          duration: Infinity,
          position: 'top-right',
          className: 'group',
          description: notification.message,
          icon: <IconComponent className="w-5 h-5" />,
          action: notification.action
            ? {
                label: (
                  <div className="flex items-center gap-2">
                    <notification.action.icon className="w-4 h-4" />
                    {notification.action.label}
                  </div>
                ),
                onClick: notification.action.onClick,
              }
            : undefined,
          onDismiss: () => {
            setDismissedNotifications(notification.id);
          },
          closeButton: true,
        }),
      );
    });

    hasShownNotifications.current = true;
  }, [dismissedNotifications, setDismissedNotifications]);

  return null;
}
