import ImageIcon from '@mui/icons-material/Image';
import DRAlert from 'components/DRAlert';
import { DRButtonNoMargin } from 'components/DRButton';
import DRDialog, { IDRDialogProps } from 'components/DRDialog';
import { useSnackbar } from 'notistack';
import { useMemo, useState } from 'react';
import GitService from 'services/GitHubService';
import { logError } from 'utility/Logger';

interface ReportFormProps<T> extends IDRDialogProps {
    data: T,
    getData: () => ReportBody | undefined,
}

export interface ReportBody {
    repo: string,
    title: string,
    body: string,
    labels: string[],
}

function ReportForm<T>(props: ReportFormProps<T>) {
    const { children, onClose, getData, ...rest } = props;
    const { enqueueSnackbar } = useSnackbar();
    const [loading, setLoading] = useState(false);
    const githubService = useMemo(() => { return new GitService(enqueueSnackbar) }, [enqueueSnackbar]);

    const handleSend = () => {
        setLoading(true)
        let data = getData()
        if (!data) {
            setLoading(false)
            return
        }
        githubService.createIssue(data.repo, data.title, data.body, data.labels).then(res => {
            setLoading(false);
        }).catch(err => {
            logError("send Report", err)
            setLoading(false);
        })
    }

    return (
        <DRDialog
            {...rest}
            title={"Bug report"}
            maxWidth={"md"}
            onClose={onClose}
            actions={
                <>
                    <DRButtonNoMargin
                        label='Cancel'
                        onClick={onClose}
                        disabled={loading}
                    />
                    <DRButtonNoMargin
                        label='Send'
                        onClick={handleSend}
                        loading={loading}
                    />
                </>
            }
        >
            {children}
            <DRAlert
                startDecorator={< ImageIcon />}
            >
                To add images or files you can use WeTransfer (or other methods to share files) and add the link to the text. Or use GitHub
            </DRAlert>

        </DRDialog>
    )
}

export default ReportForm   