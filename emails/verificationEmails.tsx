import {
    Html, Head, Font, Preview, Heading, Row, Section, Text, Button,
} from '@react-email/components';

interface VerificationEmailProps {
    username: string;
    otp: string;
}

export default function VerificationEmail({ username, otp }: VerificationEmailProps) {
    return (
        <Html lang="en" dir="ltr">
            <Head>
                <title>Verification Code</title>
                <Font
                    fontFamily="Roboto"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
                        format: 'woff2',
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <Preview>Your verification code for your account</Preview>
            
            <Section style={main}>
                <Section style={container}>
                    <Heading as="h1" style={heading}>
                        Verify Your Email Address
                    </Heading>
                    
                    <Text style={paragraph}>Hi {username},</Text>
                    
                    <Text style={paragraph}>
                        Thank you for registering. Please use the following verification code to complete your registration process. This code will expire in 10 minutes.
                    </Text>
                    
                    <Section style={otpContainer}>
                        <Text style={otpText}>{otp}</Text>
                    </Section>
                    
                    <Text style={paragraph}>
                        If you didn't create an account with us, please ignore this email.
                    </Text>
                    
                    <Section style={buttonContainer}>
                        <Button pX={20} pY={12} style={button} href="#">
                            Verify Account
                        </Button>
                    </Section>
                    
                    <Text style={footer}>
                        © {new Date().getFullYear()} Your Company Name. All rights reserved.
                    </Text>
                </Section>
            </Section>
        </Html>
    );
}

// Styles
const main = {
    backgroundColor: '#f6f9fc',
    padding: '20px 0',
};

const container = {
    backgroundColor: '#ffffff',
    border: '1px solid #f0f0f0',
    borderRadius: '8px',
    padding: '45px',
    margin: '0 auto',
    width: '100%',
    maxWidth: '600px',
};

const heading = {
    color: '#333333',
    fontSize: '22px',
    fontWeight: 'bold',
    margin: '0 0 20px 0',
    textAlign: 'center' as const,
};

const paragraph = {
    color: '#555555',
    fontSize: '16px',
    lineHeight: '24px',
    margin: '0 0 20px 0',
};

const otpContainer = {
    backgroundColor: '#f6f9fc',
    border: '1px dashed #d0d7de',
    borderRadius: '4px',
    padding: '15px',
    margin: '30px 0',
    textAlign: 'center' as const,
};

const otpText = {
    color: '#333333',
    fontSize: '32px',
    fontWeight: 'bold',
    letterSpacing: '8px',
    margin: '0',
};

const buttonContainer = {
    textAlign: 'center' as const,
    margin: '30px 0',
};

const button = {
    backgroundColor: '#007ee6',
    borderRadius: '4px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    textAlign: 'center' as const,
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
    lineHeight: '16px',
    margin: '20px 0 0 0',
    textAlign: 'center' as const,
};