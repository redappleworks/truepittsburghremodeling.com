import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
    showBeforeAfter?: boolean;
}

export default function ProjectCard({
    project,
    showBeforeAfter = true,
}: ProjectCardProps) {
    return (
        <Link
            href={`/portfolio/${project.slug}`}
            className="group block bg-white rounded-2xl border-2 border-charcoal/10 overflow-hidden shadow-card hover:shadow-card-hover transition-all"
        >
            {/* Image Section */}
            <div className="relative aspect-[4/3] overflow-hidden">
                {showBeforeAfter ? (
                    <div className="relative w-full h-full">
                        {/* After Image (main) */}
                        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/20 to-charcoal/40 flex items-center justify-center">
                            <Image
                                src={project.afterImage}
                                alt={`${project.title} - After`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        {/* Before/After Badge */}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-charcoal">
                            Before & After
                        </div>
                    </div>
                ) : (
                    <Image
                        src={project.afterImage}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                )}
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-charcoal/60 mb-2">
                    <span>📍 {project.area}</span>
                    <span>•</span>
                    <span>⏱ {project.timeline}</span>
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                </h3>
                <p className="text-charcoal/70 text-sm line-clamp-2">
                    {project.shortDescription}
                </p>
            </div>
        </Link>
    );
}
