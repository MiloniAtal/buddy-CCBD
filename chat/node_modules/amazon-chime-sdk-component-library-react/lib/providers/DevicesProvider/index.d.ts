import type { AudioInputDevice } from 'amazon-chime-sdk-js';
import React from 'react';
import { useAudioInputs } from './AudioInputProvider';
import { useAudioOutputs } from './AudioOutputProvider';
import { useVideoInputs } from './VideoInputProvider';
interface Props {
    onDeviceReplacement?: (nextDevice: string, currentDevice: AudioInputDevice) => Promise<AudioInputDevice>;
}
declare const DevicesProvider: React.FC<Props>;
export { DevicesProvider, useAudioInputs, useAudioOutputs, useVideoInputs };
