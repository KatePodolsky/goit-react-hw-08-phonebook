import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ContactForm from "../../components/ContactForm";
import ContactList from "../../components/ContactList";
import FilterContacts from "../../components/FilterContacts";
import Loading from "../../components/Loader";

import { contactsOperations, contactsSelectors } from '../../redux/contacts';



class ContactsPage extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <ContactForm />
        <FilterContacts />
        {this.props.isLoadingContacts && <Loading />}
        <ContactList />
      </>
    )
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
})

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts())
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);





