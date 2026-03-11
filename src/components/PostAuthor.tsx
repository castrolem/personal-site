import memojiComputer from "@/assets/memoji-computer.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";

interface Props {
	publishedAt: string;
	totalPosts: number;
	totalBooks: number;
}

function Stat({ label, value }: { label: string; value: number }) {
	return (
		<div className="space-y-1">
			<div className="text-2xl leading-none font-semibold tracking-tight">
				{value}
			</div>
			<div className="text-sm text-muted-foreground">{label}</div>
		</div>
	);
}

function PostAuthor({ publishedAt, totalPosts, totalBooks }: Props) {
	return (
		<div className="flex items-start gap-4">
			<HoverCard>
				<HoverCardTrigger
					href="/about"
					className="inline-flex rounded-full outline-none ring-offset-2 transition-transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-ring"
				>
					<Avatar className="size-12 border-border/80 bg-card shadow-sm">
						<AvatarImage alt="Luis Castro avatar" src={memojiComputer.src} />
						<AvatarFallback className="text-xs font-medium">LC</AvatarFallback>
					</Avatar>
				</HoverCardTrigger>

				<HoverCardContent className="w-[24rem]">
					<div className="space-y-6">
						<div className="flex items-start gap-4">
							<Avatar className="size-24 border-border/80 bg-card shadow-sm">
								<AvatarImage
									alt="Luis Castro avatar"
									src={memojiComputer.src}
								/>
								<AvatarFallback className="text-lg font-medium">
									LC
								</AvatarFallback>
							</Avatar>

							<div className="space-y-1 pt-1">
								<div className="text-xl leading-none font-semibold tracking-tight">
									Luis Castro
								</div>
								<div className="text-lg text-muted-foreground">@castrolem</div>
							</div>
						</div>

						<p className="text-foreground">
							I&apos;m a software engineer writing about product work, code
							quality, books, and the things I keep learning while building on
							the internet.
						</p>

						<div className="flex gap-10">
							<Stat label="Posts" value={totalPosts} />
							<Stat label="Books" value={totalBooks} />
						</div>

						<div className="space-y-3">
							<Button href="/about" className="w-full rounded-full" size="lg">
								More about me
							</Button>
							<Button
								href="/library"
								className="w-full rounded-full"
								size="lg"
								variant="secondary"
							>
								Browse library
							</Button>
						</div>
					</div>
				</HoverCardContent>
			</HoverCard>

			<div className="min-w-0 space-y-1 pt-1">
				<div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
					<a className="font-semibold" href="/about">
						Luis Castro
					</a>
					<p className="text-sm text-muted-foreground">{publishedAt}</p>
				</div>
			</div>
		</div>
	);
}

export { PostAuthor };
