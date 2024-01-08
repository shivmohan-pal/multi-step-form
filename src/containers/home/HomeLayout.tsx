import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  TabProps,
  Box,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import InterviewSettingsForm from "./InterviewSettingsForm";
import JobDetailsForm from "./JobDetailsForm";
import RequisitionForm from "./RequisitionDetailsForm";
import DisplayCard from "./PreviewCard";
import { IDataProvider, useData } from "./DataProvider";
import { useTabIndex } from "./TabProvider";
import { IState } from "@src/interface/forms";


const CustomTab: React.FC<TabProps> = ({ children, ...props }) => {
  return (
    <Tab p="1rem" fontFamily="Poppins" {...props}>
      {children}
    </Tab>
  );
};

const HomeLayout = () => {
  // eslint-disable-next-line 
  //@ts-ignore
  const { state } = useData(); 
  const { requisitionDetails, jobDetails } = state;
  //@ts-ignore
  const {index} = useTabIndex();

  const isreqiuistionDetails =()=> (requisitionDetails.gender && requisitionDetails.noOfOpenings && requisitionDetails.requisitionTitle && requisitionDetails.urgency)? false:true;
  const isJobDetails =()=> (jobDetails.jobDetails && jobDetails.jobTitle && jobDetails.jobLocation)? false:true;

  return (
    <Box w="100%">
      <Container maxW="1200px">
        <Heading fontFamily="Poppins" fontSize="1.5rem" my="2rem">
          Create Candidate Requisition
        </Heading>
        <Tabs index={index} isLazy>
          <TabList>
            <CustomTab>Requistion Details</CustomTab>
            <CustomTab isDisabled={isreqiuistionDetails()}>Job Details</CustomTab>
            <CustomTab isDisabled={isJobDetails()}>Interview Settings</CustomTab>
          </TabList>
          <Grid display="grid" gridTemplateColumns="3fr 2fr" gap="24px">
            <TabPanels>
              <TabPanel>
                <RequisitionForm />
              </TabPanel>
              <TabPanel>
                <JobDetailsForm />
              </TabPanel>
              <TabPanel>
                <InterviewSettingsForm />
              </TabPanel>
            </TabPanels>
            <DisplayCard />
          </Grid>
        </Tabs>
      </Container>
    </Box>
  );
};

export default HomeLayout;
