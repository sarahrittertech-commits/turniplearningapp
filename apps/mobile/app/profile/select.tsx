import { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, fonts, radius, spacing } from '../../lib/theme';
import type { ProfileAvatarId } from '@turnip/shared';

const AVATAR_EMOJIS: Record<ProfileAvatarId, string> = {
  bunny: '🐰',
  bear: '🐻',
  cat: '🐱',
  dog: '🐶',
  elephant: '🐘',
  fox: '🦊',
  giraffe: '🦒',
  hippo: '🦛',
};

const AVATAR_COLORS: Record<ProfileAvatarId, string> = {
  bunny: colors.greenPrimary,
  bear: colors.blue,
  cat: colors.purpleMid,
  dog: colors.cardOrange,
  elephant: colors.cardCyan,
  fox: colors.cardOrangeDark,
  giraffe: colors.cardYellow,
  hippo: colors.cardViolet,
};

const PLACEHOLDER_PROFILES = [
  { id: '1', name: 'Emma', avatarId: 'bunny' as ProfileAvatarId },
  { id: '2', name: 'Jack', avatarId: 'bear' as ProfileAvatarId },
];

export default function ProfileSelectScreen() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string>(PLACEHOLDER_PROFILES[0].id);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setTimeout(() => {
      router.replace('/');
    }, 300);
  };

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        {/* Top bar */}
        <View style={styles.topBar}>
          <Pressable
            style={({ pressed }) => [styles.topBarBtn, pressed && styles.topBarBtnPressed]}
            onPress={() => router.back()}
          >
            <Text style={styles.topBarBtnText}>✕</Text>
          </Pressable>

          <View style={styles.grownUpsRow}>
            <Text style={styles.grownUpsLabel}>Grown-ups</Text>
            <Pressable style={styles.settingsBtn}>
              <Text style={styles.settingsBtnIcon}>⚙️</Text>
            </Pressable>
          </View>
        </View>

        {/* Main content */}
        <View style={styles.center}>
          <Text style={styles.heading}>Select your character</Text>

          {/* Profile row */}
          <View style={styles.profileRow}>
            {PLACEHOLDER_PROFILES.map((profile) => {
              const isSelected = selectedId === profile.id;
              return (
                <Pressable
                  key={profile.id}
                  style={styles.profileWrap}
                  onPress={() => handleSelect(profile.id)}
                >
                  {/* Ring + avatar circle */}
                  <View style={[styles.ring, isSelected && styles.ringSelected]}>
                    <View style={[styles.avatarCircle, { backgroundColor: AVATAR_COLORS[profile.avatarId] }]}>
                      <Text style={styles.avatarEmoji}>{AVATAR_EMOJIS[profile.avatarId]}</Text>
                    </View>
                  </View>

                  {/* Name */}
                  <Text style={[styles.profileName, isSelected && styles.profileNameSelected]}>
                    {profile.name}
                  </Text>

                  {/* Edit button (selected only) */}
                  {isSelected && (
                    <View style={styles.editBtn}>
                      <Text style={styles.editBtnIcon}>✏️</Text>
                    </View>
                  )}
                </Pressable>
              );
            })}

            {/* Add account */}
            <Pressable style={styles.profileWrap}>
              <View style={styles.addCircle}>
                <Text style={styles.addIcon}>＋</Text>
              </View>
              <Text style={styles.profileName}>Add account</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const AVATAR_SIZE = 144;
const RING_PADDING = 4;
const RING_SIZE = AVATAR_SIZE + RING_PADDING * 2 + 4; // 4px border

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.purpleDeep,
  },
  safeArea: {
    flex: 1,
  },
  // ── Top bar ──
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
  },
  topBarBtn: {
    width: 48,
    height: 48,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarBtnPressed: {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  topBarBtnText: {
    fontSize: 24,
    color: colors.white,
    fontFamily: fonts.regular,
  },
  grownUpsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  grownUpsLabel: {
    fontSize: 17,
    fontFamily: fonts.medium,
    color: 'rgba(255,255,255,0.7)',
  },
  settingsBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsBtnIcon: {
    fontSize: 18,
    fontFamily: fonts.regular,
  },
  // ── Center ──
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: spacing.xl,
  },
  heading: {
    fontSize: 40,
    fontFamily: fonts.bold,
    color: colors.white,
    textAlign: 'center',
    marginBottom: 64,
  },
  // ── Profile row ──
  profileRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 80,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  profileWrap: {
    alignItems: 'center',
    gap: spacing.md,
  },
  // ── Avatar ──
  ring: {
    width: RING_SIZE,
    height: RING_SIZE,
    borderRadius: RING_SIZE / 2,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.2)',
    padding: RING_PADDING,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ringSelected: {
    borderColor: colors.greenSpotify,
  },
  avatarCircle: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: {
    fontSize: 72,
    fontFamily: fonts.regular,
  },
  // ── Name ──
  profileName: {
    fontSize: 20,
    fontFamily: fonts.bold,
    color: colors.white,
    textAlign: 'center',
  },
  profileNameSelected: {
    color: colors.greenSpotify,
  },
  // ── Edit ──
  editBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editBtnIcon: {
    fontSize: 18,
    fontFamily: fonts.regular,
  },
  // ── Add account ──
  addCircle: {
    width: RING_SIZE,
    height: RING_SIZE,
    borderRadius: RING_SIZE / 2,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.3)',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    fontSize: 48,
    color: 'rgba(255,255,255,0.5)',
    fontFamily: fonts.regular,
  },
});
