import { connect } from 'react-redux';

import { ContactDetailPage } from './ContactDetailPage.component';
import {
  getContact,
  getContactList,
} from '../../Redux/Actions/Contact/ContactAction';

const mapStateToProps = (state) => ({
  loading: state.contact.loading,
  error: state.contact.error,
  errorMessage: state.contact.errorMessage,
  contactDetail: state.contact.contactDetail,
  message: state.contact.message,
});

const mapDispatchToProps = (dispatch) => ({
  getContactList: () => dispatch(getContactList()),
  getContact: (id) => dispatch(getContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetailPage);
