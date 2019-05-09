import Avatar from '@material-ui/core/Avatar/Avatar';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import * as React from 'react';

interface IThumbnailPhotoProps {
    className: any;
    fullName: string;
    imgSrc: string;
    onClick?: any;
    placement: any;
}

export const ThumbnailPhoto: React.FunctionComponent<IThumbnailPhotoProps> = ({
    className,
    fullName,
    imgSrc,
    onClick,
    placement,
}) => {
    const [imgLoaded, setImgLoad] = React.useState(false);
    const [userInitials, setInitials] = React.useState('');

    const splitName = () => {
        const initials = fullName ? fullName.split(' ').reduce((p, s, i) => i > 1 ? p : p + s[0], '')
            : '';
        setInitials(initials);
    };

    React.useEffect(() => {
        splitName();
        const thumbnail = new Image();
        thumbnail.onload = () => {
            setImgLoad(true);
        };
        thumbnail.src = imgSrc;
    });

    return (
        <Tooltip
            title={(imgLoaded && fullName) ? fullName : ''}
            placement={placement}
        >
            <Avatar
                className={className}
                src={imgLoaded ? imgSrc : ''}
                onClick={onClick}
            >
                {
                    !imgLoaded &&
                    userInitials
                }
            </Avatar>
        </Tooltip>
    );
};
