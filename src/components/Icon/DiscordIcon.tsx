import { myUseTheme } from 'Theme';
import { ReactComponent as Icon } from 'svg/discord.svg';

interface IProps {
    fill?: string;
}

function DiscordIcon(props: IProps) {
    const theme = myUseTheme()
    return <Icon
        fill={props.fill ? props.fill : theme.palette.text.primary}
    />
}

export default DiscordIcon;