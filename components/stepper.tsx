import * as React from 'react'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Check from '@mui/icons-material/Check'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import DetailsIcon from '@mui/icons-material/Details'
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector'
import { StepIconProps } from '@mui/material/StepIcon'

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}))

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#784af4',
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }),
)

// function QontoStepIcon(props: StepIconProps) {
//   const { active, completed, className } = props;

//   return (
//     <QontoStepIconRoot ownerState={{ active }} className={className}>
//       {completed ? (
//         <Check className="QontoStepIcon-completedIcon" />
//       ) : (
//         <div className="QontoStepIcon-circle" />
//       )}
//     </QontoStepIconRoot>
//   );
// }

let lineProgress = false
function progress() {
  lineProgress = true
  console.log(lineProgress)
  return lineProgress
}
function regress() {
  lineProgress = false
  console.log(lineProgress)
  return lineProgress
}
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    transition: 'all 0.5s',
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      '@keyframes progress': {
        '0%': { backgroundSize: '0%' },
        '100%': { backgroundSize: '100%' },
      },
      transition: 'all 0.5s',
      backgroundImage:
        'linear-gradient( 95deg, #f6ed75 0%, #97F675 50%, #757cf6  100%)',
      backgroundRepeat: 'no-repeat',
      animation: `${lineProgress ? 'progress 0.5s linear  forwards' : null}`,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      '@keyframes progress': {
        '0%': { backgroundSize: '0%' },
        '100%': { backgroundSize: '100%' },
      },
      transition: 'all 0.5s',
      backgroundImage:
        'linear-gradient( 95deg, #f6ed75 0%, #97F675 50%, #757cf6  100%)',
      backgroundRepeat: 'no-repeat',
      // animation: `${!lineProgress ?  'progress 2s linear 2s  reverse forwards' :null}`,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 100,
    transition: 'all 0.5s',
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}))

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean }
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    '@keyframes progress': {
      '0%': { backgroundSize: '0%' },
      '100%': { backgroundSize: '100%' },
    },
    backgroundImage:
      'linear-gradient( 136deg, #f6ed75 0%, #97F675 50%, #757cf6  100%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: lineProgress ? '0%' : '100%',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    animation: `${lineProgress ? 'progress 0.5s linear  0.5s forwards' : null}`,
  }),
  ...(ownerState.completed && {
    '@keyframes progress': {
      '0%': { backgroundSize: '0%' },
      '100%': { backgroundSize: '100%' },
    },
    backgroundImage:
      'linear-gradient( 136deg, #f6ed75 0%, #97F675 50%, #757cf6  100%)',
    backgroundRepeat: 'no-repeat',
    // backgroundSize: lineProgress? '0%':'100%',
    // animation: `${!lineProgress  ?  'progress 2s linear   reverse forwards' :null}`,
  }),
}))

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props

  const icons: { [index: string]: React.ReactElement } = {
    1: <DetailsIcon />,
    2: <SupportAgentIcon />,
    3: <PictureAsPdfIcon />,
  }

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  )
}

const steps = ['Fill in the Details', 'Select Assistant', 'Upload Documents']

export default function CustomizedSteppers({
  Nextsteps,
  count,
}: {
  Nextsteps: number
  count: boolean
}) {
  if (count) {
    progress()
  } else regress()

  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
        {/* {steps.map((label) => (
        //   <Step key={label}>
        //     <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
        //   </Step>
        ))} */}
      </Stepper>
      <Stepper
        alternativeLabel
        activeStep={Nextsteps}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  )
}
