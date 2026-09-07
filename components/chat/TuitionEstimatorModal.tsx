'use client'

import React, { useState } from 'react'
import { X, Calculator, DollarSign, Award, GraduationCap, Building, Sparkles, Send } from 'lucide-react'

interface TuitionEstimatorModalProps {
  isOpen: boolean
  onClose: () => void
  onAskAssistant: (prompt: string) => void
}

export function TuitionEstimatorModal({
  isOpen,
  onClose,
  onAskAssistant,
}: TuitionEstimatorModalProps) {
  const [studentType, setStudentType] = useState<'undergrad' | 'grad' | 'online'>('undergrad')
  const [isInternational, setIsInternational] = useState<boolean>(true)
  const [includeHousing, setIncludeHousing] = useState<boolean>(true)
  const [scholarshipTier, setScholarshipTier] = useState<number>(12000) // per year

  if (!isOpen) return null

  // Indiana Tech baseline tuition calculations
  let baseTuitionPerSemester = 16436 // Undergrad traditional
  let feesPerSemester = 650
  let housingPerSemester = includeHousing ? 5450 : 0

  if (studentType === 'grad') {
    baseTuitionPerSemester = 615 * 9 // ~9 credits/semester at $615/credit
    feesPerSemester = 350
    housingPerSemester = includeHousing ? 5450 : 0
  } else if (studentType === 'online') {
    baseTuitionPerSemester = 430 * 12 // ~12 credits/term at $430/credit
    feesPerSemester = 150
    housingPerSemester = 0
  }

  const annualBaseTuition = baseTuitionPerSemester * 2
  const annualFees = feesPerSemester * 2
  const annualHousing = housingPerSemester * 2
  const annualGross = annualBaseTuition + annualFees + annualHousing

  const applicableScholarship = studentType === 'undergrad' ? scholarshipTier : 0
  const annualNet = Math.max(0, annualGross - applicableScholarship)
  const semesterNet = Math.round(annualNet / 2)

  const handleAskEstimate = () => {
    const summaryText = `I used the Indiana Tech Tuition Estimator with the following details:
• Degree Type: ${studentType === 'undergrad' ? 'Undergraduate Traditional' : studentType === 'grad' ? 'Graduate (Master/PhD)' : 'Online CPS'}
• Residency: ${isInternational ? 'International Student (F-1)' : 'Domestic Student'}
• Housing: ${includeHousing ? 'On-Campus Room & Board' : 'Commuter / Off-Campus'}
• Estimated Annual Merit Award: $${applicableScholarship.toLocaleString()}
• Estimated Net Cost: $${annualNet.toLocaleString()}/year (~$${semesterNet.toLocaleString()}/semester)

Can you explain the payment plan options, additional scholarship opportunities, and the I-20 financial verification requirements for this estimate?`

    onAskAssistant(summaryText)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl transition-all dark:border-white/15 dark:bg-[#18181b] dark:text-white">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-5 dark:border-white/10 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-black shadow-md shadow-amber-500/20">
              <Calculator className="size-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight">
                Indiana Tech Cost & Tuition Estimator
              </h3>
              <p className="text-xs text-neutral-500 dark:text-white/60">
                Official 2026 Academic Rates & Merit Aid Estimations
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex size-8 items-center justify-center rounded-xl bg-neutral-100 text-neutral-500 hover:bg-neutral-200 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto custom-scrollbar">
          {/* Degree Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-white/60 mb-2">
              Select Degree Program
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: 'undergrad', label: 'Undergraduate', sub: 'Traditional Campus', icon: GraduationCap },
                { id: 'grad', label: 'Graduate', sub: 'MBA / MS / Ph.D.', icon: Award },
                { id: 'online', label: 'Online CPS', sub: 'Accelerated Degree', icon: Building },
              ].map((item) => {
                const Icon = item.icon
                const isSelected = studentType === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setStudentType(item.id as any)}
                    className={`flex flex-col items-center justify-center rounded-2xl border p-3 text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'border-amber-500 bg-amber-500/10 text-amber-900 dark:text-amber-200 font-semibold shadow-xs ring-1 ring-amber-500/30'
                        : 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100 dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:bg-white/10'
                    }`}
                  >
                    <Icon className={`size-5 mb-1.5 ${isSelected ? 'text-amber-600 dark:text-amber-400' : 'text-neutral-400 dark:text-white/50'}`} />
                    <span className="text-xs font-bold">{item.label}</span>
                    <span className="text-[10px] text-neutral-500 dark:text-white/50">{item.sub}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Student Residency & Housing Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-4 dark:border-white/10 dark:bg-white/5">
              <span className="text-xs font-bold text-neutral-800 dark:text-white block mb-2">
                Residency Status
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsInternational(true)}
                  className={`flex-1 rounded-xl py-2 text-xs font-medium transition-all cursor-pointer ${
                    isInternational
                      ? 'bg-amber-500 font-bold text-black shadow-xs'
                      : 'bg-white text-neutral-700 dark:bg-white/10 dark:text-white/80 border border-neutral-200 dark:border-transparent'
                  }`}
                >
                  International (F-1)
                </button>
                <button
                  type="button"
                  onClick={() => setIsInternational(false)}
                  className={`flex-1 rounded-xl py-2 text-xs font-medium transition-all cursor-pointer ${
                    !isInternational
                      ? 'bg-amber-500 font-bold text-black shadow-xs'
                      : 'bg-white text-neutral-700 dark:bg-white/10 dark:text-white/80 border border-neutral-200 dark:border-transparent'
                  }`}
                >
                  Domestic (US)
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-4 dark:border-white/10 dark:bg-white/5">
              <span className="text-xs font-bold text-neutral-800 dark:text-white block mb-2">
                Campus Housing & Dining
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setIncludeHousing(true)}
                  disabled={studentType === 'online'}
                  className={`flex-1 rounded-xl py-2 text-xs font-medium transition-all cursor-pointer ${
                    includeHousing && studentType !== 'online'
                      ? 'bg-amber-500 font-bold text-black shadow-xs'
                      : 'bg-white text-neutral-700 dark:bg-white/10 dark:text-white/80 border border-neutral-200 dark:border-transparent'
                  } ${studentType === 'online' ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  On-Campus Room
                </button>
                <button
                  type="button"
                  onClick={() => setIncludeHousing(false)}
                  className={`flex-1 rounded-xl py-2 text-xs font-medium transition-all cursor-pointer ${
                    !includeHousing || studentType === 'online'
                      ? 'bg-amber-500 font-bold text-black shadow-xs'
                      : 'bg-white text-neutral-700 dark:bg-white/10 dark:text-white/80 border border-neutral-200 dark:border-transparent'
                  }`}
                >
                  Commuter / Off-Campus
                </button>
              </div>
            </div>
          </div>

          {/* Merit Scholarship Tier (Undergrad) */}
          {studentType === 'undergrad' && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-white/60">
                  Estimated Merit Scholarship (Annual)
                </label>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  -${scholarshipTier.toLocaleString()} / year
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: 'None', val: 0 },
                  { label: 'Standard ($6k)', val: 6000 },
                  { label: 'High Merit ($12k)', val: 12000 },
                  { label: 'Max Merit ($18k)', val: 18000 },
                ].map((tier) => (
                  <button
                    key={tier.val}
                    type="button"
                    onClick={() => setScholarshipTier(tier.val)}
                    className={`rounded-xl border py-2 text-xs font-medium transition-all cursor-pointer ${
                      scholarshipTier === tier.val
                        ? 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold'
                        : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100 dark:border-white/10 dark:bg-white/5 dark:text-white/70'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Breakdown Summary Box */}
          <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-b from-amber-500/10 to-transparent p-5 dark:border-amber-500/30">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3 dark:border-white/10 text-xs">
              <span className="text-neutral-600 dark:text-white/70">Estimated Tuition (Annual):</span>
              <span className="font-semibold text-neutral-900 dark:text-white">${annualBaseTuition.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between border-b border-neutral-200 py-2 dark:border-white/10 text-xs">
              <span className="text-neutral-600 dark:text-white/70">Estimated Campus Fees:</span>
              <span className="font-semibold text-neutral-900 dark:text-white">${annualFees.toLocaleString()}</span>
            </div>
            {includeHousing && studentType !== 'online' && (
              <div className="flex items-center justify-between border-b border-neutral-200 py-2 dark:border-white/10 text-xs">
                <span className="text-neutral-600 dark:text-white/70">Room & Board (Housing + Meals):</span>
                <span className="font-semibold text-neutral-900 dark:text-white">${annualHousing.toLocaleString()}</span>
              </div>
            )}
            {applicableScholarship > 0 && (
              <div className="flex items-center justify-between border-b border-neutral-200 py-2 dark:border-white/10 text-xs text-emerald-600 dark:text-emerald-400">
                <span>Applied Merit Award:</span>
                <span className="font-bold">-${applicableScholarship.toLocaleString()}</span>
              </div>
            )}
            <div className="flex items-center justify-between pt-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-white/60 block">
                  Net Estimated Out-Of-Pocket
                </span>
                <span className="text-2xl font-black text-amber-600 dark:text-amber-400">
                  ${annualNet.toLocaleString()}
                  <span className="text-xs font-normal text-neutral-500 dark:text-white/60"> / year</span>
                </span>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-neutral-500 dark:text-white/60 block">Per Semester</span>
                <span className="text-base font-bold text-neutral-800 dark:text-white">
                  ~${semesterNet.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between border-t border-neutral-100 bg-neutral-50 px-6 py-4 dark:border-white/10 dark:bg-white/[0.02]">
          <span className="text-[11px] text-neutral-500 dark:text-white/50">
            *Final cost subject to official financial aid award letter.
          </span>
          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="rounded-xl border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handleAskEstimate}
              className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-xs font-bold text-black shadow-md shadow-amber-500/20 hover:brightness-110 transition-transform cursor-pointer"
            >
              <Sparkles className="size-3.5" />
              <span>Ask AI About This</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
