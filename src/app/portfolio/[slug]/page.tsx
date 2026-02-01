import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailClient from "@/components/ProjectDetailClient";
import { projects } from "@/data/projects";
import { SITE_URL } from "@/lib/config";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const project = projects.find((p) => p.slug === resolvedParams.slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} | ${project.area} ${project.category}`,
        description: project.shortDescription,
        openGraph: {
            title: `${project.title} - Pittsburgh ${project.category} Remodeling`,
            description: project.shortDescription,
            url: `${SITE_URL}/portfolio/${project.slug}`,
            images: [project.afterImage],
        },
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const resolvedParams = await params;
    const project = projects.find((p) => p.slug === resolvedParams.slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetailClient project={project} />;
}
