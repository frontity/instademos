import React from 'react';
import { Box, TextInput, FormField, Button } from 'grommet';
import Icon from './Icon';
import inject from './inject';

const Form = ({ getDemo, url, onChangeUrl, email, onChangeEmail, busy }) => (
  <form onSubmit={getDemo}>
    <Box
      gap="small"
      pad="40px"
      round="xsmall"
      align="stretch"
      elevation="small"
      background="white"
    >
      <FormField label="WordPress URL" htmlFor="url-input">
        <TextInput
          id="url-input"
          type="url"
          required
          placeholder="https://myblog.com"
          value={url}
          onChange={onChangeUrl}
          size="small"
        />
      </FormField>
      <FormField label="Email" htmlFor="email-input">
        <TextInput
          id="email-input"
          type="email"
          required
          placeholder="example@myblog.com"
          value={email}
          onChange={onChangeEmail}
          size="small"
        />
      </FormField>
      <Box align="stretch" elevation="small" round="8px">
        <Button
          primary
          color="brand"
          round="xsmall"
          label="view instant demo"
          disabled={busy}
          icon={<Icon />}
          type="submit"
        />
      </Box>
    </Box>
  </form>
);

export default inject(
  ({ store }) => ({
    getDemo: store.getDemo,
    url: store.url,
    onChangeUrl: store.onChangeUrl,
    email: store.email,
    onChangeEmail: store.onChangeEmail,
    busy: store.busy,
  }),
  Form,
);
