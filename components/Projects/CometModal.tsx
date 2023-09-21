import { CometLogo } from "../Icons";
import DesktopModal, {DesktopModalProps} from "./DesktopModal";

function CometModal(props: DesktopModalProps){

    return(<DesktopModal {...props} dark >
        <CometLogo />
    </DesktopModal>)
}

export default CometModal