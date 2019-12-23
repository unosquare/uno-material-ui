import Avatar, { AvatarProps } from '@material-ui/core/Avatar/Avatar';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import * as React from 'react';

interface ThumbnailPhotoProps extends AvatarProps {
    fullName: string;
    imgSrc: string;
    placement:
        | 'bottom-end'
        | 'bottom-start'
        | 'bottom'
        | 'left-end'
        | 'left-start'
        | 'left'
        | 'right-end'
        | 'right-start'
        | 'right'
        | 'top-end'
        | 'top-start'
        | 'top';
}

export const ThumbnailPhoto: React.FunctionComponent<ThumbnailPhotoProps> = ({
    fullName,
    imgSrc,
    placement,
    ...rest
}) => {
    const initials = fullName ? fullName.split(' ').reduce((p, s, i) => (i > 1 ? p : p + s[0]), '') : '';
    const [imgLoaded, setImgLoad] = React.useState(false);

    React.useEffect(() => {
        const thumbnail = new Image();
        thumbnail.src = imgSrc;
        thumbnail.onload = (): void => setImgLoad(true);

        return (): void => setImgLoad(false);
    }, [imgSrc]);

    return (
        <Tooltip title={imgLoaded && fullName ? fullName : ''} placement={placement}>
            <Avatar {...rest} src={imgLoaded ? imgSrc : ''}>
                {!imgLoaded && initials}
            </Avatar>
        </Tooltip>
    );
};
