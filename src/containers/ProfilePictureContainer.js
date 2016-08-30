import { connect } from 'react-redux';
import ProfilePicture from 'src/views/ProfilePicture';
import { pushCameraRollRoute } from 'src/actions/navigation';

export default connect(
  state => ({
    imagePath: state.onboarding.profilePicture,
  }), {
    onChoosePhotoPress: pushCameraRollRoute,
  }
)(ProfilePicture);