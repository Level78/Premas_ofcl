import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const Contact = props => {
  const { className, ...rest } = props;

  return (
    <div className={clsx('jarallax', className)} {...rest}>
      <SectionHeader
        title="Have a project to discuss?"
        subtitle="Learn how or purpose-driven strategy is about doing the right thing for customers and society--and also a powerful way to drive Health ecosystem"
        ctaGroup={[
          <Button href="contact-page-cover" variant="contained" color="primary" size="large">
            CONNECT
          </Button>,
        ]}
        data-aos="fade-up"
      />
    </div>
  );
};

Contact.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Contact;
