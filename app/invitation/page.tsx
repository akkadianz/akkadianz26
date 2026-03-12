import type { Metadata } from 'next'
import InvitationScene from './invitation-scene'

export const metadata: Metadata = {
  title: "AKKADIANZ'26 Invitation | Inaugural Ceremony",
  description:
    "Invitation for internal college members to attend the AKKADIANZ'26 inaugural ceremony at SBM College of Engineering & Technology, Dindigul.",
}

export default function InvitationPage() {
  return <InvitationScene />
}
