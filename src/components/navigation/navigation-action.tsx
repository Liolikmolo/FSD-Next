'use client';

import { useModal } from '@/hooks/use-modal-store';
import { Plus } from 'lucide-react';
import { ActionTooltip } from '../action-tooltip';

export const NavigationAction = ({}) => {
    const { onOpen, isOpen } = useModal();

    return (
        <div>
            <ActionTooltip side="right" align="center" label="Add a server">
                <button
                    className="group flex items-center outline-none "
                    onClick={() => {
                        onOpen('createServer');
                    }}>
                    <div className="flex m-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-blue-500">
                        <Plus
                            className="group-hover:text-white transition text-blue-500"
                            size={25}
                        />
                    </div>
                </button>
            </ActionTooltip>
        </div>
    );
};
