import LoginCard from './LoginCard'
import { PrimaryButton } from '../../Button'
import { SecondaryLink } from '../../Link'
import { Input } from '../../Form/Input'
import {
    Formik,
    Form,
    Field,
  } from 'formik';

export const LoginForm = (props: any) => {
    const initialValues: LoginCredentials = { userName: '', password: '' };
    return (
    <LoginCard >
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <Field id="userName" name="userName" label="UserName"  as={Input}  />
          <Field id="password" type="password" name="password" label="Password" as={Input}/>
          <PrimaryButton>Log in</PrimaryButton>
        </Form>
      </Formik>
      <SecondaryLink>
      Forgot Password?
      </SecondaryLink>
    </LoginCard>
    )
}

export default LoginForm


interface LoginCredentials {
    userName: string;
    password: string;
  }