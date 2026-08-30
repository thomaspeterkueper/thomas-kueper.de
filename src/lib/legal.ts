export type LegalInfo = {
  responsible: string;
  address: string;
  email: string;
};

const LEGAL_REGISTRY_URL =
  'https://raw.githubusercontent.com/thomaspeterkueper/kueper-knowledge-graph/main/registry/legal/impressum-master.json';

export const LEGAL_FALLBACK: LegalInfo = {
  responsible: 'Thomas Peter Küper',
  address: 'Mörfelder Landstraße 103, 60598 Frankfurt am Main, Deutschland',
  email: 't.kueper@camaleo.de',
};

export async function getLegalInfo(): Promise<LegalInfo> {
  try {
    const response = await fetch(LEGAL_REGISTRY_URL);
    if (!response.ok) return LEGAL_FALLBACK;

    const data = (await response.json()) as {
      responsible?: Partial<Record<'name' | 'address' | 'email', string>>;
    };
    const responsible = data.responsible;

    if (!responsible?.name || !responsible.address || !responsible.email) {
      return LEGAL_FALLBACK;
    }

    return {
      responsible: responsible.name,
      address: responsible.address,
      email: responsible.email,
    };
  } catch {
    return LEGAL_FALLBACK;
  }
}

export function legalAddressLines(address: string): string[] {
  return address.split(',').map((part) => part.trim()).filter(Boolean);
}
