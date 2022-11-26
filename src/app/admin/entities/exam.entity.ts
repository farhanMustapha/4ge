export interface ExamEntity {
  id?: number
  name: string
}

export interface ExerciseEntity {
  id?: number
  number: number
  question: string
  examId?: number
  correction: Correction
}

export interface Correction {
  id?: number
  journal: string
  accounts: CorrectionAccount[]
}

export interface CorrectionAccount {
  id?: number
  date: Date
  account: string
  credit: number
  debit: number
}

export const JOURNALS: string[] = ['Achat', 'Vente', 'Banque', 'Caisse', 'Operation divers']
