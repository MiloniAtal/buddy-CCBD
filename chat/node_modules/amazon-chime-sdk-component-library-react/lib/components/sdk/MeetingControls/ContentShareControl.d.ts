import React from 'react';
import { BaseSdkProps } from '../Base';
interface Props extends BaseSdkProps {
    /** The label that will be shown for content share control, it defaults to `Content`. */
    label?: string;
    /** The label that will be shown for pausing content share button in content share control, it defaults to `Pause`. */
    pauseLabel?: string;
    /** The label that will be shown for unpausing content share button in content share control, it defaults to `Unpause`. */
    unpauseLabel?: string;
    /** Title attribute for the icon, it defaults to `Screen share`. */
    iconTitle?: string;
}
declare const ContentShareControl: React.FC<Props>;
export default ContentShareControl;
