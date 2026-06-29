import type { BoardMember } from "@/data/board";
import { Avatar } from "./Avatar";
import { Badge } from "./Badge";

export function BoardMemberCard({ member }: { member: BoardMember }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-navy/5">
      <div className="p-5 pb-0">
        <Avatar name={member.name} className="rounded-xl" />
      </div>
      <div className="p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <Badge tone="confirmed">
            {member.detailsConfirmed ? "Confirmed" : "Name confirmed"}
          </Badge>
        </div>
        <h3 className="text-lg font-semibold text-navy">{member.name}</h3>
        <p className="mt-1 text-sm text-charcoal/70">{member.title}</p>
        <p className="text-sm text-charcoal/70">{member.company}</p>
        <p className="mt-2 flex flex-wrap items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-goldText">
          {member.wscRole}
          {!member.roleConfirmed ? (
            <Badge tone="sample">Role — confirm</Badge>
          ) : null}
        </p>
      </div>
    </article>
  );
}
