import React from 'react';
import { BaseSdkProps } from '../Base';
interface Props extends BaseSdkProps {
    /** The label that will be shown for video input control, it defaults to `Video`. */
    label?: string;
    /** The label that will be shown for the background blur button. */
    backgroundBlurLabel?: string;
}
declare const VideoInputBackgroundBlurControl: React.FC<Props>;
export default VideoInputBackgroundBlurControl;
