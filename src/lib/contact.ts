export type ContactPayload = {
  fullName: string;
  email: string;
  company: string;
  phone?: string;
  managementSoftware?: string;
  process?: string;
  role: 'titolare' | 'segreteria' | 'istruttore';
  studentsCount: number;
  city: string;
  source: 'home' | 'demo';
};

export type ReferralPayload = {
  studentName: string;
  phone: string;
  city: string;
  referredSchool: string;
  role: 'allievo' | 'ex_allievo';
  studentEmail?: string;
  schoolContact?: string;
  notes?: string;
  consent: boolean;
  source: 'home';
};

const baseUrl = (import.meta.env.VITE_CONTACT_API_URL as string | undefined)?.replace(
  /\/$/,
  '',
);

export async function submitContact(payload: ContactPayload) {
  if (!baseUrl) {
    throw new Error('VITE_CONTACT_API_URL non configurata');
  }

  const response = await fetch(`${baseUrl}/api/marketing/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data?.success) {
    throw new Error(data?.message ?? 'Invio non riuscito. Riprova più tardi.');
  }

  return data;
}

export async function submitReferral(payload: ReferralPayload) {
  if (!baseUrl) {
    throw new Error('VITE_CONTACT_API_URL non configurata');
  }

  const response = await fetch(`${baseUrl}/api/marketing/referral`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data?.success) {
    throw new Error(data?.message ?? 'Invio non riuscito. Riprova più tardi.');
  }

  return data;
}
