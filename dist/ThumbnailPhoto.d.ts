import { AvatarProps } from '@material-ui/core/Avatar/Avatar';
import * as React from 'react';
interface IThumbnailPhotoProps extends AvatarProps {
    fullName: string;
    imgSrc: string;
    placement: any;
}
export declare const ThumbnailPhoto: React.FunctionComponent<IThumbnailPhotoProps>;
export {};
