import { invitacion } from "@/lib/invitation";
import OpenInvitation from "@/components/OpenInvitation";
import OpenInvitationPhoto from "@/components/OpenInvitationPhoto";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import InvitationMessage from "@/components/InvitationMessage";
import StackGallery from "@/components/StackGallery";
import Parents from "@/components/Parents";
import Locations from "@/components/Locations";
import DressCode from "@/components/DressCode";
import Itinerary from "@/components/Itinerary";
import GiftRegistry from "@/components/GiftRegistry";
import RsvpForm from "@/components/RsvpForm";

export default function Home() {
  return (
    <main className="mx-auto max-w-[900px]">
      {invitacion.apertura.usarVersionFoto ? (
        <OpenInvitationPhoto />
      ) : (
        <OpenInvitation />
      )}

      <Hero />
      <Countdown />
      <InvitationMessage />
      <StackGallery />
      <Parents />
      <Locations />
      <DressCode />
      <Itinerary />
      <GiftRegistry />
      <RsvpForm />
    </main>
  );
}
