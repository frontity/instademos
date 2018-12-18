import React from 'react';
import { Box, Text, Paragraph, Anchor } from 'grommet';
import { StatusInfo, StatusGood, StatusWarning } from 'grommet-icons';
import QRCode from 'qrcode.react';
import styled from 'styled-components';

import inject from './inject';

const InfoBox = ({ status, message, demoUrl }) => {
  let StatusIcon = StatusInfo;
  let color = 'status-unknown';
  let info = '';

  if (status === 'busy') {
    info = message;
  } else if (status === 'ok') {
    StatusIcon = StatusGood;
    color = 'status-ok';
    info = 'Demo ready!';
  } else if (status === 'error') {
    StatusIcon = StatusWarning;
    color = 'status-error';
    info = 'Oops! something went wrong';
  }

  return (
    status !== 'idle' && (
      <Box
        gap="medium"
        pad="40px"
        round="xsmall"
        elevation="small"
        background="white"
        animation={{ type: 'fadeIn', duration: 300 }}
      >
        <Box direction="row" gap="small" align="center">
          <Box>
            <StatusIcon size="20px" color={color} />
          </Box>
          <Text weight={600} size="small" color={color}>
            {info}
          </Text>
        </Box>
        {status !== 'error' ? (
          <Box align="center" gap="medium">
            <Box width="128px" height="128px">
              <Opacity value={status === 'ok' ? 1 : 0.5}>
                <QRCode value={demoUrl || 'DEMO'} />
              </Opacity>
            </Box>
            <Text as="label">
              Scan QR code to view this demo on your mobile phone and discover
              more features
            </Text>
          </Box>
        ) : (
          <Box gap="medium">
            <Paragraph size="small" margin={{ vertical: '0' }}>
              We haven't been able to generate your demo, we will get back to
              you by <strong>email</strong> shortly
            </Paragraph>
            <Paragraph size="small" margin={{ vertical: '0' }}>
              Make sure your WordPress is a <strong>blog</strong> or{' '}
              <strong>news</strong> site. We only support sites using
              posts/pages.
            </Paragraph>
            <Paragraph size="small" margin={{ vertical: '0' }}>
              In the meantime, you can visit{' '}
              <Anchor href="https://blog.frontity.com">
                https://blog.frontity.com
              </Anchor>{' '}
              from a mobile phone to see our PWA theme in action.
            </Paragraph>
          </Box>
        )}
      </Box>
    )
  );
};

export default inject(
  ({ store }) => ({
    status: store.status,
    message: store.message,
    demoUrl: store.demoUrl,
  }),
  InfoBox,
);

const Opacity = styled.div`
  opacity: ${({ value = 1 }) => value};
`;
