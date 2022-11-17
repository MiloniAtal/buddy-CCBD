import React from 'react';
import { BaseSdkProps } from '../Base';
interface Props extends BaseSdkProps {
    /** The label that will be shown for video input control, it defaults to `Video`. */
    label?: string;
}
declare const VideoInputControl: React.FC<Props>;
export default VideoInputControl;
