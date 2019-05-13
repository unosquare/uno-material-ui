import Avatar, { AvatarProps } from '@material-ui/core/Avatar/Avatar';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import * as React from 'react';

interface IThumbnailPhotoProps extends AvatarProps {
    fullName: string;
    imgSrc: string;
    placement: any;
}

export const ThumbnailPhoto: React.FunctionComponent<IThumbnailPhotoProps> = ({
    fullName,
    imgSrc,
    placement,
    ...rest
}) => {

    const initials = fullName ? fullName.split(' ').reduce((p, s, i) => i > 1 ? p : p + s[0], '') : '';
    const [imgLoaded, setImgLoad] = React.useState(false);

    React.useEffect(() => {
        const thumbnail = new Image();
        thumbnail.onload = () => setImgLoad(true);
        thumbnail.src = imgSrc;
    }, [imgSrc]);

    return (
        <Tooltip
            title={(imgLoaded && fullName) ? fullName : ''}
            placement={placement}
        >
            <Avatar
                {...rest}
                src={imgLoaded ? imgSrc : ''}
            >
                {
                    (!imgLoaded) &&
                    initials
                }
            </Avatar>
        </Tooltip>
    );
};
