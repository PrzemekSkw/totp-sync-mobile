# TOTP Sync Mobile

Native Android/iOS companion app for [TOTP Sync](https://github.com/PrzemekSkw/totp-sync).

> ⚠️ **Work in Progress** - This app is under active development and **NOT ready for production use**.

## 📱 Current Status: v0.1.0-alpha

### ✅ Implemented
- Material Design 3 UI foundation
- React Navigation with native animations
- Welcome screen with fade/scale animations
- Setup screen with staggered animations
- Modern, clean interface

### 🚧 In Development
- [ ] Login/Register screens
- [ ] Dashboard with TOTP codes
- [ ] QR code scanner
- [ ] Import from FreeOTP+/2FAuth
- [ ] Backend synchronization
- [ ] Biometric authentication
- [ ] Offline support

## 🛠️ Tech Stack

- React Native 0.82
- TypeScript
- React Navigation 7
- Material Design 3
- Native animations

## 📦 Installation (Development)
```bash
# Clone the repository
git clone https://github.com/PrzemekSkw/totp-sync-mobile.git
cd totp-sync-mobile

# Install dependencies
npm install

# Run Metro bundler
npm start

# Build and install on Android device
cd android
./gradlew assembleDebug
adb install app/build/outputs/apk/debug/app-debug.apk

# Forward Metro port
adb reverse tcp:8081 tcp:8081
```

## 🌐 Web Version

For the full-featured web application, see: [totp-sync](https://github.com/PrzemekSkw/totp-sync)

## 📝 Roadmap

**Q1 2025** (Current)
- Basic UI/UX with Material Design 3
- Navigation structure
- Authentication screens

**Q2 2025**
- TOTP code generation
- QR scanner
- Import/Export functionality
- Backend integration

**Q3 2025**
- Biometric authentication
- Offline mode
- iOS support
- Beta release

## ⚠️ Development Notes

- Requires Android device or emulator
- USB debugging must be enabled
- Minimum Android 7.0 (API 24)
- Tested on OnePlus 9 Pro

## 📄 License

MIT License - See [LICENSE](LICENSE) file

---

**Star ⭐ this repo if you're interested in the development!**
