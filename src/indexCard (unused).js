import React, { FC, useState, useEffect, useContext } from 'react';
import axios, { CancelTokenSource } from 'axios';
import useCurrentPageTitleUpdater from 'hooks/useCurrentPageTitleUpdater';
import { dummyCandidate, dummyDocumentFile, dummyFeedbackEmployers, dummyJobExperience, dummyMedicalHistory, dummySkillFDW } from 'utils/dummy';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import useRouter from 'hooks/useRouter';
import { Backdrop, Button, ButtonBase, Container, Fade, Grid, makeStyles, Menu, MenuItem, Modal, Theme, Typography } from '@material-ui/core';
import HeaderContent from './components/HeaderContent';
import CandidateProfile from './components/CandidateProfile';
import CandidateMedicalHistory from './components/CandidateMedicalHistory';
import CandidateRestDay from './components/CandidateRestDay';
import CandidateSkill from './components/CandidateSkill';
import CandidateDocument from './components/CandidateDocument';
import CandidateHistoryFDW from './components/CandidateHistoryFDW';
import { CurrentPageContext } from 'contexts/CurrentPageContext';
import { GET_CANDIDATE_BY_ID_URL, GET_DELETE_CANDIDATES, GET_EXPORT_PDF_URL } from 'constants/url';
import { Breadcrumb, Page, PaperCustom, StandardConfirmationDialog } from 'components';
import IconBackButton from '../../images/backButton.svg';
import { CurrentUserContext } from 'contexts/CurrentUserContext';
import { getCurrentRoleName } from 'selectors';
import imageLoader from 'images/imageLoader.gif';
import ActionSnackbar from 'components/ActionSnackbar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  container: {
    '& > :nth-child(n+2)': {
      marginTop: theme.spacing(2)
    }
  },
  buttonExport: {
    height: theme.spacing(5)
  },
  menuList: {
    minHeight: 30
  },
  loader: {
    width: '50%',
    marginLeft: theme.spacing(-1.5)
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
}));
const CandidateDetailPage: FC = () => {
  useCurrentPageTitleUpdater('Helper Detail');
  const { currentPageTitle } = useContext(CurrentPageContext);
  const { currentUser } = useContext(CurrentUserContext);
  const classes = useStyles();
  const { history, location, match } = useRouter();
  const params = match.params.id;
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isLoadingPage, setLoadingPage] = useState<boolean>(false);
  const [candidateId, setCandidateId] = useState<number>(0);
  const [candidates, setCandidates] = useState<CandidateModel>(dummyCandidate);
  const [medicalHistory, setMedicalHistory] = useState<MedicalHistoryModel>(dummyMedicalHistory);
  const [candidateSkillsFDW, setCandidateSkillsFDW] = useState<SkillsFDWModel[]>([dummySkillFDW]);
  const [jobExperiences, setJobExperiences] = useState<JobExperienceModel[]>([dummyJobExperience]);
  const [feedbackEmployer, setFeedbackEmployer] = useState<FeedbackEmployerModel>(dummyFeedbackEmployers);
  const [documentUploadFiles, setDocumentUploadFiles] = useState<CandidateFileDocument[]>([dummyDocumentFile]);
  const [candidateName, setCandidateName] = useState<string>('');
  const [roles, setRoles] = useState<string>('');
  const [messageSuccess, setMessageSuccess] = useState<string>('');
  const [snackbarVarient, setSnackbarVarient] = useState<'success' | 'error'>('success');
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [confirmationShow, setConfirmationShow] = useState<boolean>(false);
  const [isCancelButton, setIsCancelButton] = useState<boolean>(false);
  const handleCloseDialog = () => {
    setConfirmationShow(false);
  };
  const handleCloseConfirmation = () => {
    setConfirmationShow(false);
  };
  const handleDeleteActionClick = () => {
    setConfirmationShow(true);
    setMessage('Are you sure you want to delete this?');
  };
  useEffect(() => {
    const cancelTokenSource: CancelTokenSource = axios.CancelToken.source();
    const loadData = async () => {
      setIsLoadingData(true);
      try {
        const { data } = await axios.get(`${GET_CANDIDATE_BY_ID_URL(params)}`, { cancelToken: cancelTokenSource.token });
        const candidateMedicalHistoryData: MedicalHistoryModel = data.candidate.MedicalHistory;
        const candidateSkillFDWsData: SkillsFDWModel[] = [...data.candidate.SkillFDWs];
        const jobExperiencesData: JobExperienceModel[] = [...data.candidate.JobExperiences];
        const feedbackEmployerData: FeedbackEmployerModel = data.candidate.FeedbackEmployer;
        const documentUploadFileData: CandidateFileDocument[] = data.candidate.DocumentUploadFiles;
        setCandidateId(Number(params));
        setCandidates(data.candidate);
        setCandidateName(data.candidate.name);
        setMedicalHistory(candidateMedicalHistoryData);
        setCandidateSkillsFDW(candidateSkillFDWsData);
        setJobExperiences(jobExperiencesData);
        setFeedbackEmployer(feedbackEmployerData);
        const currentDocumentUploadFileData = documentUploadFileData.map(value => {
          value.isDeleted = false;
          value.new = false;
          return value;
        });
        setDocumentUploadFiles(currentDocumentUploadFileData);
        setIsLoadingData(false);
      } catch (err) {
        console.log(err);
        setIsLoadingData(true);
      }
    };
    loadData();
    return () => {
      cancelTokenSource.cancel();
    };
  }, [params]);
  const handleBack = () => {
    const path = location.pathname.split('/').filter(x => x);
    history.push(`/${path.slice(0, 0 + 1).join('/')}`);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  useEffect(() => {
    if (!currentUser) {
      return;
    }
    const roles = currentUser ? getCurrentRoleName(currentUser) : '';
    setRoles(roles);
  }, [currentUser]);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSetMessageSuccess = (message: string) => {
    setMessageSuccess(message);
  };
  const handleSetMessageError = (message: string) => {
    setMessageError(message);
  };
  const actionWrapper = async (action: () => Promise<void>, actionMessage: string) => {
    setIsLoadingData(true);
    try {
      await action();
      handleCloseDialog();
      handleSetMessageSuccess(`Successfully ${actionMessage}`);
      setSnackbarVarient('success');
      setOpenSnackbar(true);
      setTimeout(async () => {
        handleBack();
      }, 800);
    } catch (err) {
      handleCloseDialog();
      handleSetMessageError(`Failed to ${actionMessage}`);
      setSnackbarVarient('error');
      setOpenSnackbar(true);
    }
    setIsLoadingData(false);
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  const handleExport = async (event: React.MouseEvent<HTMLLIElement>) => {
    setAnchorEl(event.currentTarget);
    setLoadingPage(true);
    const response = await axios({
      url: GET_EXPORT_PDF_URL(candidateId),
      method: 'GET',
      responseType: 'blob'
    });
    const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
    const newwindow = window.open(url, 'name', 'height=700,width=750');
    if (newwindow && window.focus) {
      newwindow.focus();
    }
    setLoadingPage(false);
  };
  const deleteCandidate = async () => {
    await actionWrapper(async () => {
      await axios.delete(GET_DELETE_CANDIDATES(candidateId));
    }, 'delete candidate');
  };
  return (
    <Page title={currentPageTitle}>
      <Container>
        <Grid container direction='row' spacing={1}>
          <Grid item xs={6}>
            <Typography variant='subtitle1' component='h3'>
              {currentPageTitle}
            </Typography>
            <Typography variant='h6' component='h6' color='textSecondary'>
              <Breadcrumb nameLast={candidateName} />
            </Typography>
            <ButtonBase focusRipple component='span' disableRipple onClick={handleBack}>
              <img src={IconBackButton} />
            </ButtonBase>
          </Grid>
          <Grid container item xs={6} justify='flex-end'>
            <Button variant='contained' color='primary' className={classes.buttonExport} onClick={handleClick}>
              ACTION
              <ArrowDropDownIcon />
            </Button>
            <Menu
              id='list-menu'
              anchorEl={anchorEl}
              keepMounted
              elevation={1}
              getContentAnchorEl={null}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center'
              }}
            >
              <MenuItem className={classes.menuList} onClick={handleExport}>
                Export as PDF
              </MenuItem>
              {roles !== 'partner_agency' && (
                <MenuItem className={classes.menuList} onClick={handleDeleteActionClick}>
                  Delete Helper
                </MenuItem>
              )}
            </Menu>
          </Grid>
        </Grid>
        <PaperCustom>
          <HeaderContent candidate={candidates} setCandidate={setCandidates} isLoadingData={isLoadingData} setIsLoadingData={setIsLoadingData} />
        </PaperCustom>
        <PaperCustom>
          <CandidateProfile candidates={candidates} setCandidates={setCandidates} isLoadingData={isLoadingData} setIsLoadingData={setIsLoadingData} />
        </PaperCustom>
        <PaperCustom>
          <CandidateMedicalHistory
            medicalHistory={medicalHistory}
            setMedicalHistory={setMedicalHistory}
            isLoadingData={isLoadingData}
            setIsLoadingData={setIsLoadingData}
          />
        </PaperCustom>
        <PaperCustom>
          <CandidateRestDay
            medicalHistory={medicalHistory}
            setMedicalHistory={setMedicalHistory}
            isLoadingData={isLoadingData}
            setIsLoadingData={setIsLoadingData}
          />
        </PaperCustom>
        <PaperCustom>
          <CandidateSkill
            candidateSkillsFDW={candidateSkillsFDW}
            setCandidateSkillsFDW={setCandidateSkillsFDW}
            candidateId={candidateId}
            isLoadingData={isLoadingData}
            setIsLoadingData={setIsLoadingData}
          />
        </PaperCustom>
        <PaperCustom>
          <CandidateHistoryFDW
            jobExperiences={jobExperiences}
            setJobExperiences={setJobExperiences}
            feedbackEmployer={feedbackEmployer}
            setFeedbackEmployer={setFeedbackEmployer}
            candidateId={candidateId}
            isLoadingData={isLoadingData}
            setIsLoadingData={setIsLoadingData}
          />
        </PaperCustom>
        <PaperCustom>
          <CandidateDocument
            isLoadingData={isLoadingData}
            setIsLoadingData={setIsLoadingData}
            candidateId={candidateId}
            documentUploadFiles={documentUploadFiles}
            setDocumentUploadFiles={setDocumentUploadFiles}
            setLoadingPage={setLoadingPage}
          />
        </PaperCustom>
        
      </Container>
      <Modal
        aria-labelledby='spring-modal-title'
        aria-describedby='spring-modal-description'
        className={classes.modal}
        open={isLoadingPage}
        disableBackdropClick
        disableAutoFocus
        disableEnforceFocus
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={isLoadingPage}>
          <img src={imageLoader} alt='imageLoader' className={classes.loader} />
        </Fade>
      </Modal>
      <StandardConfirmationDialog
        variant={'warning'}
        message={message}
        open={confirmationShow}
        noCancelButton={isCancelButton}
        handleClose={handleCloseConfirmation}
        onConfirm={() => deleteCandidate()}
      />
      <ActionSnackbar
        variant={snackbarVarient}
        message={snackbarVarient === 'success' ? messageSuccess : messageError}
        open={openSnackbar}
        handleClose={handleCloseSnackbar}
        Icon={snackbarVarient === 'success' ? CheckCircleIcon : ErrorIcon}
      />
    </Page>
  );
};
export default CandidateDetailPage;
















