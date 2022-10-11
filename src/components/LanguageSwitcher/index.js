import React, { useState, useRef } from 'react';
import {
  IconButton, Box, List, ListItem, Divider, Typography,
  ListItemText, Popover, Tooltip, styled,
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import internationalization from '../../i18n';

import gbFlag from './flags/GB.svg';
import frFlag from './flags/FR.svg';

const SectionHeading = styled(Typography)(
  ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: "#000";
        display: block;
        padding: ${theme.spacing(2, 2, 0)};
`,
);
const ImageWrapper = styled('img')(
  () => `
        width: 30px;
        margin: 3px;
`,
);

const IconButtonPrimary = styled(IconButton)(
  ({ theme }) => `
    margin-left: ${theme.spacing(1)};
    background: "#fff";
    color: "#000";
    padding: 0;
    width: 42px;
    height: 42px;
    border-radius: 100%;
    transition: ${theme.transitions.create(['background', 'color'])};
    &.active,
    &:active,
    &:hover {
      background: "#F6EDF3";
      color: "#000";
    }
`,
);

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const getLanguage = i18n.language || 'en';

  const switchLanguage = ({ lng }) => {
    if (getLanguage !== lng) {
      window.location.reload();

      setTimeout(() => {
        internationalization.changeLanguage(lng);
        localStorage.setItem('language', lng);
      });
    }
  };
  const ref = useRef(null);

  return (
    <>
      <Tooltip title="Select language">
        <IconButtonPrimary color="primary" ref={ref}>
          <ImageWrapper
            sx={getLanguage === 'en' ? { border: '1px solid white' } : null}
            onClick={() => switchLanguage({ lng: 'en' })}
            alt="English"
            src={gbFlag}
          />
          <ImageWrapper
            sx={getLanguage === 'fr' ? { border: '1px solid white' } : null}
            onClick={() => switchLanguage({ lng: 'fr' })}
            alt="Français"
            src={frFlag}
          />
        </IconButtonPrimary>
      </Tooltip>
    </>
  );
}

export default LanguageSwitcher;