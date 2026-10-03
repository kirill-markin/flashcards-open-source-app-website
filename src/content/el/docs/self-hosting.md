---
title: Οδηγός αυτοφιλοξενίας
description: Τρέξτε το Nibomo τοπικά με PostgreSQL, ταυτοποίηση, backend, web και διαχείριση ή αναπτύξτε την τεκμηριωμένη στοίβα παραγωγής με AWS CDK.
---

Το Nibomo υποστηρίζει δύο διακριτές διαδρομές: ένα τοπικό περιβάλλον ανάπτυξης και μια εγκατάσταση παραγωγής στο AWS. Το Docker Compose τρέχει την PostgreSQL και τις μεταναστεύσεις για την τοπική ανάπτυξη· δεν είναι ο τρόπος εγκατάστασης στην παραγωγή.

## Απαιτήσεις τοπικής ανάπτυξης

- Git
- Bash
- GNU Make
- Docker με Docker Compose
- Node.js 24
- npm

Το παρεχόμενο αρχείο Docker Compose τρέχει προς το παρόν την PostgreSQL 18.4. Δεν χρειάζεστε ξεχωριστή τοπική εγκατάσταση της PostgreSQL.

## Γρήγορη τοπική εκκίνηση

```bash
git clone https://github.com/kirill-markin/flashcards-open-source-app.git
cd flashcards-open-source-app
cp .env.example .env
make db-up
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
npm install --prefix apps/admin
```

Το `make db-up` εκκινεί την PostgreSQL και τρέχει το `scripts/deploy/migrate.sh` μέσω του container μεταναστεύσεων. Με τους προεπιλεγμένους κωδικούς πρόσβασης που αντιγράφονται από το `.env.example`, η μετανάστευση δημιουργεί αυτές τις τοπικές συνδέσεις χρόνου εκτέλεσης:

- backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- auth: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- reporting: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Αν αλλάξετε το `BACKEND_DB_PASSWORD`, το `AUTH_DB_PASSWORD` ή το `REPORTING_DB_PASSWORD` στο `.env`, χρησιμοποιήστε τον ίδιο νέο κωδικό πρόσβασης στο αντίστοιχο URL σύνδεσης.

### Γρήγορη εκκίνηση μόνο για τοπική χρήση

Ο στόχος Make του backend δεν φορτώνει το `.env` της ρίζας. Περάστε ρητά τις απαιτούμενες τοπικές ρυθμίσεις του:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Τρέξτε τα προγράμματα-πελάτες σε ξεχωριστά τερματικά:

```bash
make web-dev
make admin-dev
```

Αυτή η διαδρομή σκόπιμα δεν εκκινεί το `make auth-dev`. Το `AUTH_MODE=none` είναι μια ρητά μη ασφαλής λειτουργία μόνο για localhost· μην τη χρησιμοποιείτε ποτέ σε περιβάλλον εγκατεστημένο σε διακομιστή.
Καλύπτει την ανάπτυξη του βασικού backend, της δημόσιας ανακάλυψης του Agent API, του web και της διαχείρισης, αλλά με αυτήν το Chat V2 δεν είναι διαθέσιμο.

### Πλήρης τοπική ροή Cognito

Ο στόχος auth φορτώνει το `.env` της ρίζας, ενώ ο στόχος backend όχι. Πρώτα αντικαταστήστε το παλιό `DATABASE_URL` στο αντιγραμμένο `.env` με το URL του ρόλου auth και προσθέστε τις πραγματικές σας τιμές Cognito:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Εκκινήστε την υπηρεσία auth:

```bash
make auth-dev
```

Στο τερματικό του backend, φορτώστε ρητά το `.env` και στη συνέχεια αντικαταστήστε για αυτή τη διεργασία το URL της βάσης δεδομένων auth με το URL του ρόλου backend:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Τρέξτε τα `make web-dev` και `make admin-dev` στα δικά τους τερματικά. Και οι δύο στόχοι φορτώνουν το `.env` της ρίζας.

Οι υπηρεσίες χρησιμοποιούν αυτές τις τοπικές διευθύνσεις:

| Υπηρεσία | Διεύθυνση |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Auth, όταν έχει ρυθμιστεί | `http://localhost:8081` |
| Backend API | `http://localhost:8080/v1` |
| Εφαρμογή ιστού | `http://localhost:3000` |
| Εφαρμογή διαχείρισης | `http://localhost:3001` |

Σταματήστε την PostgreSQL και το container μεταναστεύσεων με:

```bash
make db-down
```

## Τοπική διαμόρφωση

Ξεκινήστε από το `.env.example`· τεκμηριώνει τις διαθέσιμες μεταβλητές και ποιες τιμές είναι μόνο για τοπική χρήση. Αντικαταστήστε το παλιό `DATABASE_URL` του πριν τρέξετε την υπηρεσία auth, όπως φαίνεται παραπάνω.

Οι κύριες τοπικές ρυθμίσεις είναι:

- `MIGRATION_DATABASE_URL` για τις μεταναστεύσεις σχήματος μέσα στο Docker
- `DATABASE_URL` ορισμένο στον ρόλο `auth_app` στο `.env` της ρίζας για το `make auth-dev`
- `DATABASE_URL` που περνιέται ως ρόλος `backend_app` για το `make backend-dev`
- `AUTH_MODE` και `ALLOW_INSECURE_LOCAL_AUTH` για την ταυτοποίηση του backend
- `BACKEND_ALLOWED_ORIGINS` για τις τοπικές προελεύσεις του web και της διαχείρισης
- `ALLOWED_REDIRECT_URIS` και `COOKIE_DOMAIN` για την ταυτοποίηση στο πρόγραμμα περιήγησης
- οι τιμές του Cognito και της κρυπτογράφησης συνεδρίας όταν δοκιμάζετε πραγματικό OTP

Το Agent API είναι μέρος του backend. Το δημόσιο τοπικό έγγραφο ανακάλυψής του είναι διαθέσιμο στο `http://localhost:8080/v1/agent` αφού εκκινήσει το backend. Οι προστατευμένες λειτουργίες του Agent απαιτούν ταυτοποίηση `ApiKey` και δεν είναι διαθέσιμες στη διαδρομή `AUTH_MODE=none`.

### Υποστήριξη AI ανά διαδρομή

Οι παραπάνω τοπικές εντολές δεν εκκινούν τον ασύγχρονο worker της συνομιλίας. Η γρήγορη διαδρομή χρησιμοποιεί επίσης `AUTH_MODE=none`, το οποίο το Chat V2 απορρίπτει· η προσθήκη κλειδιού OpenAI ή ορίου χρήσης για επισκέπτες δεν κάνει αυτή τη διαδρομή να υποστηρίζει AI. Η πλήρης τοπική ροή Cognito παρέχει έναν υποστηριζόμενο μηχανισμό μεταφοράς ταυτοποίησης, αλλά και πάλι δεν εκκινεί τον worker.

Η εγκατάσταση με AWS CDK δημιουργεί τη Lambda του worker και ρυθμίζει το backend ώστε να την καλεί. Διαπιστευτήρια παρόχου όπως το `OPENAI_API_KEY` ενεργοποιούν κλήσεις μοντέλων για υποστηριζόμενα αιτήματα με ταυτοποίηση. Το `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` ενεργοποιεί και περιορίζει ξεχωριστά το AI για επισκέπτες· δεν ελέγχει το AI για συνδεδεμένους χρήστες ή για αιτήματα με ταυτοποίηση bearer. Οι ρυθμίσεις του Langfuse είναι προαιρετική διαμόρφωση ιχνηλάτησης.

## Εγγενή προγράμματα-πελάτες

Το ίδιο αποθετήριο περιέχει τα προγράμματα-πελάτες iOS και Android, αλλά οι τοπικές εντολές web/διακομιστή δεν τα μεταγλωττίζουν ούτε τα διανέμουν.

Το έργο iOS διαβάζει τους τοπικούς hosts του API και της ταυτοποίησης από:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Δημιουργήστε το από το παράδειγμα όταν χρειάζεται:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Δείτε το [README του iOS](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) και το [README του Android](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) στο αποθετήριο για τις ξεχωριστές ροές μεταγλώττισης και δοκιμών τους.

## Η παραγωγή χρησιμοποιεί AWS CDK

Η υποστηριζόμενη εγκατάσταση παραγωγής είναι η στοίβα AWS CDK που περιλαμβάνεται. Βασίζεται στο AWS και δεν είναι ανεξάρτητη από πάροχο· περιλαμβάνει:

- ένα VPC και ιδιωτικά υποδίκτυα
- PostgreSQL 18 στο Amazon RDS
- OTP μέσω email χωρίς κωδικό πρόσβασης με το Amazon Cognito
- API Gateway και Lambda για τις υπηρεσίες backend, ταυτοποίησης και MCP
- μια Lambda για τον ασύγχρονο worker της συνομιλίας και μια Lambda για προσαρμοσμένη αποστολή email του Cognito
- S3 και CloudFront για τις εφαρμογές web και διαχείρισης
- Secrets Manager για τα διαπιστευτήρια της βάσης δεδομένων, των συνεδριών, του email, της παρακολούθησης και τα προαιρετικά διαπιστευτήρια AI
- συναγερμούς CloudWatch, ειδοποιήσεις SNS και ένα σχέδιο αντιγράφων ασφαλείας RDS
- έναν ρόλο OIDC του GitHub Actions για την εγκατάσταση
- σενάρια ρύθμισης Cloudflare για τους δημόσιους τομείς

Η εγκατάσταση κάνει δημόσια διαθέσιμα τα `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` και `mcp.<domain>`. Μπορεί επίσης να δημιουργήσει ανακατεύθυνση για τον κύριο τομέα (apex) όταν ο ριζικός τομέας δεν χρησιμοποιείται για κάτι άλλο.

Τρέξτε το βοηθητικό σενάριο παραγωγής από έναν υπολογιστή διαχειριστή με:

- Node.js 24 και npm
- Bash και GNU Make
- Docker σε λειτουργία
- το AWS CLI με ταυτοποίηση στον λογαριασμό AWS της εγκατάστασης
- το GitHub CLI με ταυτοποίηση για το αποθετήριο-στόχο
- `curl`, `jq` και Python 3

Πριν από την εγκατάσταση, ορίστε τις τιμές του διαχειριστή στο `.env` της ρίζας. Το απαιτούμενο σύνολο περιλαμβάνει την περιοχή AWS, τον τομέα, το email ειδοποιήσεων, το αποθετήριο GitHub, τα διαπιστευτήρια Cloudflare, τα διαπιστευτήρια Resend και τη διαμόρφωση Sentry του backend. Τα διαπιστευτήρια OpenAI και Langfuse είναι προαιρετικά.

Η προτιμώμενη εντολή για την πρώτη εγκατάσταση από τη ρίζα του αποθετηρίου είναι:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Η ρητή εγκατάσταση του auth απαιτείται προς το παρόν σε καθαρό checkout, επειδή το βοηθητικό σενάριο εγκατάστασης ενσωματώνει αυτό το πακέτο αλλά δεν το εγκαθιστά. Το σενάριο δημιουργεί ή αλλάζει πραγματικούς πόρους στο AWS, στο Cloudflare και στο GitHub. Πριν το τρέξετε, διαβάστε την τεκμηρίωση εγκατάστασης του αποθετηρίου και εξετάστε το κόστος του cloud. Εκτελεί το bootstrap του CDK, αναπτύσσει την υποδομή, τρέχει τις μεταναστεύσεις, ανεβάζει τα αρχεία των εφαρμογών web και διαχείρισης, ρυθμίζει τις δημόσιες εγγραφές DNS `app`, `admin`, `api`, `auth` και `mcp`, εκτός αν παραλειφθούν, και συμπληρώνει τη διαμόρφωση του GitHub Actions που λείπει.

Μετά την εγκατάσταση:

1. Επιβεβαιώστε τη συνδρομή SNS που στάλθηκε στα εισερχόμενα του `ALERT_EMAIL`.
2. Ρυθμίστε και επαληθεύστε τις ξεχωριστές εγγραφές DNS του τομέα αποστολής του Resend:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

Το `first-deploy.sh` τρέχει από προεπιλογή το `scripts/cloudflare/setup-dns.sh` για τους δημόσιους τομείς της εφαρμογής. Δεν τρέχει το `setup-resend-domain.sh`· αυτό δημιουργεί τις εγγραφές αποστολέα email για το `mail.<domain>` και επαληθεύει τον τομέα στο Resend. Αν κάνετε την εγκατάσταση με `--skip-dns`, ρυθμίστε τις δημόσιες εγγραφές ξεχωριστά, όπως τεκμηριώνεται στον οδηγό AWS CDK.

## Φορητότητα δεδομένων

Η εισαγωγή και εξαγωγή πακέτων χώρου εργασίας μεταφέρει μόνο κάρτες, τις ετικέτες τους και τα σχετικά πολυμέσα. Δεν μεταφέρει το ιστορικό επαναλήψεων, την κατάσταση του χρονοπρογραμματιστή FSRS, τις ρυθμίσεις του χώρου εργασίας, πλήρεις δομές τραπουλών ούτε δεδομένα λογαριασμού.

Αντιμετωπίστε τα πακέτα ως μεταφορά περιεχομένου, όχι ως πλήρη μετάβαση από τη φιλοξενούμενη υπηρεσία σε αυτοφιλοξενία ούτε ως αντίγραφο ασφαλείας για ανάκαμψη από καταστροφή. Οι διαχειριστές είναι υπεύθυνοι για τη δημιουργία αντιγράφων ασφαλείας και την επαναφορά της βάσης δεδομένων PostgreSQL και του αποθηκευτικού χώρου πολυμέσων της εγκατάστασής τους.

## Ευθύνες του διαχειριστή

Αυτοφιλοξενία σημαίνει ότι εσείς παρέχετε και συντηρείτε:

- την υποδομή AWS και το κόστος της
- το DNS του Cloudflare και τη διαμόρφωση του τομέα
- τα διαπιστευτήρια παράδοσης email του Resend και τις εγγραφές του τομέα
- την απαιτούμενη διαμόρφωση παρακολούθησης του Sentry
- τα προαιρετικά διαπιστευτήρια του παρόχου AI και του Langfuse
- μυστικά, αναβαθμίσεις, μεταναστεύσεις, ειδοποιήσεις, αντίγραφα ασφαλείας και δοκιμές επαναφοράς
- τη μεταγλώττιση και τη διανομή των εγγενών εφαρμογών για κινητά, αν θέλετε δικές σας εκδόσεις iOS ή Android

Η στοίβα περιλαμβάνει αυτοματοποίηση για πολλά από αυτά τα συστήματα, αλλά εξακολουθεί να χρειάζεται διαχειριστή. Το Docker Compose δεν αντικαθιστά αυτή την αρχιτεκτονική παραγωγής.

## Τεκμηρίωση εγκατάστασης στο αποθετήριο

- [README του αποθετηρίου](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Οδηγός εγκατάστασης backend και web](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Οδηγός εγκατάστασης με AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [Υποδομή AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
