import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../src/state/StateController'
import SourceCodeDetails from '../../components/pages/SourceCodeDetails/SourceCodeDetails'
import { PremiumApkApi } from '../../src/API/PremiumApkApi';
import { GetServerSidePropsContext } from 'next';
import { ApkData } from '../../interfaces/models';
import { ToastMessage } from '../../src/utils/ToastMessage';
import AllSeos from '../../components/shared/AllSeos';

interface Props {
    apk: ApkData
    sourceCodeId: string | string[] | undefined
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { sourceCodeId } = context.query;

    const { res, err } = await PremiumApkApi.getSingleApk(sourceCodeId);

    if (err) {
        console.log(err);
        ToastMessage.notifyError("Server Error");

    }

    const apk = res?.apkOne;
    if (!apk) {
        return {
            redirect: {
              destination: '/',
              permanent: false,
            },
          };
    }

    return {
        props: {
            apk,
            sourceCodeId
        }
    };
}

const sourceCodeId: React.FC<Props> = ({apk,sourceCodeId}) => {

    const states = useSelector(() => controller.states)

    return(<>
        <AllSeos type={`${apk.title} ${apk?.categories}`} />
        <SourceCodeDetails apk={apk} sourceCodeId={sourceCodeId} />
</>)}

export default sourceCodeId;