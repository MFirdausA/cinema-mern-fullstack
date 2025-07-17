import type { MovieDetail } from '@/services/global/global.type';
import DetailMovie from './DetailMovie';
import { useAppSelector } from '@/redux/hooks';
import SelectTheater from './SelectTheater';
import ChooseTime from './ChooseTime';
import ChooseSeat from './ChooseSeat';

export type LoaderData = {
    detail: MovieDetail
}

export default function CustomerMovieDetail() {
    const { step } = useAppSelector(state => state.ticket);
    return (
        <>
            {step === "DETAIL" && <DetailMovie />}
            {step === "THEATER" && <SelectTheater />}
            {step === "TIME" && <ChooseTime />}
            {step === "SEAT" && <ChooseSeat />}
        </>
    )
}
