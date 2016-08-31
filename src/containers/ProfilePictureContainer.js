import { connect } from 'react-redux';
import ProfilePicture from 'src/views/ProfilePicture';
import { chooseProfilePicture } from 'src/actions/onboarding';

export default connect(
  state => ({
    imagePath: state.onboarding.profilePicture,
  }), {
    onChoosePhotoPress: chooseProfilePicture,
  }
)(ProfilePicture);
