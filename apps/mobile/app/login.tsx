import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

import { colors, fonts, radius, spacing } from '../lib/theme';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleLogin = () => {
    // TODO: wire Firebase Auth
    router.replace('/profile/select');
  };

  return (
    <LinearGradient
      colors={['#C600C6', '#FAF84D']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.row}
      >
        {/* ── Left: Mascot ── */}
        <View style={styles.mascotSide}>
          <Image
            source={require('../assets/images/turnipMascot.png')}
            style={styles.mascotImage}
            resizeMode="contain"
          />
          <Text style={styles.welcomeTitle}>Welcome Back!</Text>
          <Text style={styles.welcomeSub}>Sign in to continue the fun</Text>
        </View>

        {/* ── Right: Form card ── */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Log In</Text>

          {/* Email */}
          <View style={styles.fieldGroup}>
            <View style={[styles.inputRow, emailFocused && styles.inputRowFocused]}>
              <Text style={styles.inputIcon}>✉️</Text>
              <TextInput
                style={styles.input}
                placeholder="Email address"
                placeholderTextColor="#9CA3AF"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
              />
            </View>

            {/* Password */}
            <View style={[styles.inputRow, passwordFocused && styles.inputRowFocused]}>
              <Text style={styles.inputIcon}>🔒</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#9CA3AF"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              />
            </View>

            <Pressable style={styles.forgotRow}>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </Pressable>
          </View>

          {/* Log In button */}
          <Pressable
            style={({ pressed }) => [styles.loginBtn, pressed && styles.loginBtnPressed]}
            onPress={handleLogin}
          >
            <Text style={styles.loginBtnText}>Log In</Text>
          </Pressable>

          {/* Divider */}
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Apple Sign In */}
          <Pressable
            style={({ pressed }) => [styles.appleBtn, pressed && styles.appleBtnPressed]}
            onPress={handleLogin}
          >
            <Text style={styles.appleIcon}></Text>
            <Text style={styles.appleBtnText}>Sign in with Apple</Text>
          </Pressable>

          {/* Sign Up link */}
          <View style={styles.signupRow}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <Pressable>
              <Text style={styles.signupLink}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 64,
    gap: 64,
  },
  // ── Mascot side ──
  mascotSide: {
    flexShrink: 0,
    alignItems: 'center',
    gap: spacing.md,
  },
  mascotImage: {
    width: 260,
    height: 260,
  },
  welcomeTitle: {
    fontSize: 36,
    fontWeight: '800',
    fontFamily: fonts.bold,
    color: colors.white,
    textShadowColor: 'rgba(0,0,0,0.15)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  welcomeSub: {
    fontSize: 18,
    fontFamily: fonts.medium,
    color: 'rgba(255,255,255,0.85)',
  },
  // ── Card ──
  card: {
    flex: 1,
    maxWidth: 480,
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    paddingHorizontal: 40,
    paddingVertical: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 8,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: '800',
    fontFamily: fonts.bold,
    color: colors.purpleDark,
    textAlign: 'center',
    marginBottom: 28,
  },
  // ── Inputs ──
  fieldGroup: {
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    height: 56,
  },
  inputRowFocused: {
    borderColor: colors.purpleMid,
  },
  inputIcon: {
    fontSize: 20,
    marginRight: spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: 17,
    fontFamily: fonts.regular,
    color: '#1A1A1A',
  },
  forgotRow: {
    alignSelf: 'flex-end',
  },
  forgotText: {
    fontSize: 14,
    fontFamily: fonts.semiBold,
    color: colors.purpleDark,
  },
  // ── Buttons ──
  loginBtn: {
    backgroundColor: colors.purpleDark,
    borderRadius: radius.md,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  loginBtnPressed: {
    backgroundColor: '#5a2572',
  },
  loginBtnText: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: fonts.bold,
    color: colors.white,
  },
  // ── Divider ──
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E2E8F0',
  },
  dividerText: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: '#9CA3AF',
  },
  // ── Apple ──
  appleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    borderRadius: radius.md,
    height: 56,
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  appleBtnPressed: {
    backgroundColor: '#1a1a1a',
  },
  appleIcon: {
    fontSize: 22,
    color: colors.white,
  },
  appleBtnText: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: fonts.bold,
    color: colors.white,
  },
  // ── Sign up ──
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    fontSize: 15,
    fontFamily: fonts.regular,
    color: '#6B7280',
  },
  signupLink: {
    fontSize: 15,
    fontFamily: fonts.semiBold,
    color: colors.purpleDark,
  },
});
