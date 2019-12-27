import Typography from '@material-ui/core/Typography';
import * as React from 'react';

export interface TitleProps {
    prefix?: string;
    suffix?: string;
    value: string;
    titleClass: string;
}

export const Title: React.FunctionComponent<TitleProps> = ({ prefix, suffix, value, titleClass }: TitleProps) => {
    const title = `${prefix || ''}${value}${suffix || ''}`;
    React.useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <Typography variant="h4" className={titleClass}>
            {value}
        </Typography>
    );
};

export function AppTitle(prefix?: string, suffix?: string) {
    return ({ value, titleClass }: TitleProps) => {
        const props = { prefix, suffix, value, titleClass };

        return <Title {...props} />;
    };
}
