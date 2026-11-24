import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Calendar,
  CheckCircle2,
  Cpu,
  Database,
  Droplets,
  ExternalLink,
  Flame,
  LayoutDashboard,
  ShieldCheck,
  Smartphone,
  Sprout,
  Terminal,
  Users,
} from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { LiveProjectButton } from './LiveProjectButton';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onSelectProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="min-h-[85vh] flex items-start justify-center py-4 sm:py-6"
    >
      <motion.article
        style={{
          scale,
          top: `${index * 28}px`,
        }}
        className="sticky top-20 md:top-24 w-full max-w-6xl rounded-[36px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-9 shadow-[0_30px_90px_rgba(0,0,0,0.85)]"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#D7E2EA]/15">
          <div className="flex items-start sm:items-center gap-4 sm:gap-6">
            <span
              className="hero-heading font-black leading-none shrink-0"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.2rem)' }}
            >
              {project.number}
            </span>

            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-1">
                <span className="text-xs uppercase tracking-[0.2em] text-[#BBCCD7] font-medium">
                  {project.category}
                </span>
                {project.status && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] uppercase tracking-wider bg-[#7621B0]/25 text-[#D7E2EA] border border-[#B600A8]/50">
                    <CheckCircle2 size={11} />
                    {project.status}
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#D7E2EA]">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/35 text-[#D7E2EA] px-5 py-2.5 text-xs sm:text-sm uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors"
              >
                GitHub
                <ExternalLink size={14} />
              </a>
            )}
            <LiveProjectButton
              label="View Details"
              onClick={() => onSelectProject(project)}
            />
          </div>
        </div>

        <div className="mt-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <p className="text-sm sm:text-base text-[#D7E2EA]/80 font-light max-w-2xl leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-[#17171C] text-[#BBCCD7] border border-[#D7E2EA]/15"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-5">
            <div
              className="rounded-[28px] sm:rounded-[38px] md:rounded-[44px] border border-[#D7E2EA]/20 bg-gradient-to-br from-[#171422] to-[#0C0C0C] p-5 flex flex-col justify-between overflow-hidden"
              style={{ minHeight: 'clamp(140px, 15vw, 220px)' }}
            >
              {project.mockupType === 'campus' && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-widest text-[#B600A8] font-semibold">
                      AI Timetable Engine
                    </span>
                    <Calendar size={18} className="text-[#D7E2EA]/70" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 my-3">
                    {['Mon · CS301', 'Tue · AI204', 'Wed · ML402'].map((slot) => (
                      <div
                        key={slot}
                        className="rounded-xl bg-[#0C0C0C]/80 border border-[#D7E2EA]/15 px-2.5 py-2 text-[11px] text-[#D7E2EA]"
                      >
                        {slot}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-[#D7E2EA]/60">
                    Conflict-free room, lab & faculty slot allocation
                  </p>
                </>
              )}

              {project.mockupType === 'agriculture' && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-widest text-[#BE4C00] font-semibold">
                      IoT Sensor Telemetry
                    </span>
                    <Droplets size={18} className="text-[#D7E2EA]/70" />
                  </div>
                  <div className="grid grid-cols-2 gap-2.5 my-3">
                    <div className="rounded-xl bg-[#0C0C0C]/80 border border-[#D7E2EA]/15 p-3">
                      <span className="block text-[10px] uppercase text-[#D7E2EA]/50">
                        Soil Node
                      </span>
                      <span className="text-sm font-semibold text-[#D7E2EA]">
                        Moisture Active
                      </span>
                    </div>
                    <div className="rounded-xl bg-[#0C0C0C]/80 border border-[#D7E2EA]/15 p-3">
                      <span className="block text-[10px] uppercase text-[#D7E2EA]/50">
                        Climate Node
                      </span>
                      <span className="text-sm font-semibold text-[#D7E2EA]">
                        Env Monitored
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[#D7E2EA]/60">
                    Continuous field parameter tracking for farming support
                  </p>
                </>
              )}

              {project.mockupType === 'bigdata' && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-widest text-[#BBCCD7] font-semibold">
                      Structured Curriculum
                    </span>
                    <Database size={18} className="text-[#D7E2EA]/70" />
                  </div>
                  <div className="flex flex-wrap gap-2 my-3">
                    {['Big Data Intro', 'Distributed Storage', 'SQL Queries', 'Analytics'].map(
                      (topic) => (
                        <span
                          key={topic}
                          className="rounded-xl bg-[#0C0C0C]/80 border border-[#D7E2EA]/15 px-3 py-1.5 text-xs text-[#D7E2EA]"
                        >
                          {topic}
                        </span>
                      )
                    )}
                  </div>
                  <p className="text-xs text-[#D7E2EA]/60">
                    Organized learning modules for Big Data concepts
                  </p>
                </>
              )}
            </div>

            <div
              className="rounded-[28px] sm:rounded-[38px] md:rounded-[44px] border border-[#D7E2EA]/20 bg-gradient-to-br from-[#141418] to-[#0C0C0C] p-5 flex flex-col justify-between overflow-hidden"
              style={{ minHeight: 'clamp(160px, 20vw, 290px)' }}
            >
              {project.mockupType === 'campus' && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-widest text-[#7621B0] font-semibold">
                      Multi-Role Firebase Sync
                    </span>
                    <Flame size={18} className="text-[#BE4C00]" />
                  </div>
                  <div className="space-y-2 my-3">
                    {[
                      { role: 'Admin Dashboard', detail: 'Departments, Rooms & Labs' },
                      { role: 'Teacher Dashboard', detail: 'Class Assignments & Attendance' },
                      { role: 'Student Dashboard', detail: 'Real-Time Firestore Schedule' },
                    ].map((item) => (
                      <div
                        key={item.role}
                        className="flex items-center justify-between rounded-xl bg-[#0C0C0C]/90 border border-[#D7E2EA]/10 px-3.5 py-2.5"
                      >
                        <span className="text-xs font-semibold text-[#D7E2EA]">
                          {item.role}
                        </span>
                        <span className="text-[11px] text-[#D7E2EA]/60">
                          {item.detail}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#BBCCD7]">
                    <ShieldCheck size={14} />
                    <span>Firebase Auth &amp; Cloud Firestore</span>
                  </div>
                </>
              )}

              {project.mockupType === 'agriculture' && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-widest text-[#B600A8] font-semibold">
                      Smart Farming Pipeline
                    </span>
                    <Cpu size={18} className="text-[#D7E2EA]/70" />
                  </div>
                  <div className="space-y-2.5 my-3">
                    {[
                      'Field Sensor Acquisition Layer',
                      'Threshold & Condition Processing',
                      'Agricultural Monitoring Insights',
                    ].map((step, i) => (
                      <div
                        key={step}
                        className="flex items-center gap-3 rounded-xl bg-[#0C0C0C]/90 border border-[#D7E2EA]/10 px-3.5 py-2.5"
                      >
                        <span className="text-[11px] font-mono text-[#BE4C00]">
                          0{i + 1}
                        </span>
                        <span className="text-xs text-[#D7E2EA]">{step}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-[#D7E2EA]/60">
                    Practical IoT integration for resource-aware farming
                  </span>
                </>
              )}

              {project.mockupType === 'bigdata' && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-widest text-[#B600A8] font-semibold">
                      SQL Query Interface
                    </span>
                    <Terminal size={18} className="text-[#D7E2EA]/70" />
                  </div>
                  <div className="rounded-2xl bg-[#08080A] border border-[#D7E2EA]/15 p-3.5 font-mono text-[11px] sm:text-xs text-[#BBCCD7] space-y-1 my-3">
                    <p className="text-[#B600A8]">SELECT category, COUNT(*)</p>
                    <p>FROM analytics_records</p>
                    <p>GROUP BY category;</p>
                  </div>
                  <span className="text-xs text-[#D7E2EA]/60">
                    Hands-on SQL query execution workspace
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="md:col-span-7 rounded-[28px] sm:rounded-[40px] md:rounded-[48px] border border-[#D7E2EA]/20 bg-gradient-to-br from-[#1B1226] via-[#121216] to-[#0C0C0C] p-6 sm:p-8 flex flex-col justify-between overflow-hidden min-h-[320px] sm:min-h-[380px]">
            {project.mockupType === 'campus' && (
              <div className="h-full flex flex-col justify-between gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Smartphone size={18} className="text-[#B600A8]" />
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D7E2EA]/80">
                      Android App Architecture Mockup
                    </span>
                  </div>
                  <span className="text-[11px] px-3 py-1 rounded-full bg-[#0C0C0C] border border-[#D7E2EA]/20 text-[#D7E2EA]/80">
                    Java + XML + Gradle
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center my-auto">
                  <div className="sm:col-span-6 mx-auto w-full max-w-[240px] rounded-[32px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] p-4 shadow-2xl">
                    <div className="w-14 h-1.5 rounded-full bg-[#D7E2EA]/20 mx-auto mb-4" />
                    <div className="rounded-2xl bg-gradient-to-r from-[#B600A8]/30 via-[#7621B0]/30 to-[#BE4C00]/30 p-3 mb-3 border border-[#D7E2EA]/15">
                      <p className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/70">
                        CampusSchedulerAI
                      </p>
                      <p className="text-sm font-bold text-[#D7E2EA] mt-0.5">
                        Academic Control Hub
                      </p>
                    </div>
                    <div className="space-y-2">
                      {[
                        'AI Timetable Generator',
                        'Faculty & Subject Mapping',
                        'Classroom & Lab Allocation',
                        'Attendance Tracking',
                      ].map((row) => (
                        <div
                          key={row}
                          className="flex items-center justify-between rounded-xl bg-[#16161B] px-3 py-2 text-[11px] text-[#D7E2EA]"
                        >
                          <span>{row}</span>
                          <span className="w-2 h-2 rounded-full bg-[#B600A8]" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="sm:col-span-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold">
                      <LayoutDashboard size={15} />
                      <span>14 Integrated Modules</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.slice(0, 8).map((feat) => (
                        <div
                          key={feat}
                          className="rounded-xl bg-[#0C0C0C]/80 border border-[#D7E2EA]/12 px-2.5 py-2 text-[11px] text-[#D7E2EA]/85 leading-tight"
                        >
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#D7E2EA]/60 pt-3 border-t border-[#D7E2EA]/10">
                  <span className="inline-flex items-center gap-1.5">
                    <Users size={14} />
                    Admin · Teacher · Student Portals
                  </span>
                  <span>Android Studio</span>
                </div>
              </div>
            )}

            {project.mockupType === 'agriculture' && (
              <div className="h-full flex flex-col justify-between gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Sprout size={18} className="text-[#BE4C00]" />
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D7E2EA]/80">
                      Smart Agriculture IoT Architecture
                    </span>
                  </div>
                  <span className="text-[11px] px-3 py-1 rounded-full bg-[#0C0C0C] border border-[#D7E2EA]/20 text-[#D7E2EA]/80">
                    IoT System
                  </span>
                </div>

                <div className="rounded-[28px] border border-[#D7E2EA]/15 bg-[#0C0C0C]/90 p-6 my-auto space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold uppercase tracking-wider text-[#D7E2EA]">
                      Field Monitoring Overview
                    </span>
                    <span className="text-xs text-[#BE4C00] uppercase tracking-widest">
                      Connected Node
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { title: 'Soil Conditions', sub: 'Continuous Sensing' },
                      { title: 'Environmental Data', sub: 'Field Telemetry' },
                      { title: 'Farming Support', sub: 'Actionable Monitoring' },
                    ].map((box) => (
                      <div
                        key={box.title}
                        className="rounded-2xl bg-[#16161B] border border-[#D7E2EA]/10 p-4"
                      >
                        <p className="text-xs font-semibold text-[#D7E2EA]">
                          {box.title}
                        </p>
                        <p className="text-[11px] text-[#D7E2EA]/60 mt-1">
                          {box.sub}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#D7E2EA]/60 pt-3 border-t border-[#D7E2EA]/10">
                  <span>Hardware + Monitoring Integration</span>
                  <span>Status: Completed</span>
                </div>
              </div>
            )}

            {project.mockupType === 'bigdata' && (
              <div className="h-full flex flex-col justify-between gap-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#D7E2EA]/80">
                    Browser Preview Mockup
                  </span>
                  <span className="text-[11px] px-3 py-1 rounded-full bg-[#0C0C0C] border border-[#D7E2EA]/20 text-[#D7E2EA]/80">
                    Web + SQL Interface
                  </span>
                </div>

                <div className="rounded-3xl border border-[#D7E2EA]/20 bg-[#0C0C0C] overflow-hidden shadow-2xl my-auto">
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#17171C] border-b border-[#D7E2EA]/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#BE4C00]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B600A8]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7621B0]" />
                    <span className="ml-3 text-[11px] text-[#D7E2EA]/50 font-mono truncate">
                      big-data-analytics-portal / sql-workbench
                    </span>
                  </div>
                  <div className="p-5 sm:p-6 space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#B600A8] font-semibold">
                        Educational Portal
                      </p>
                      <h4 className="text-lg font-bold text-[#D7E2EA] mt-1">
                        Big Data Analytics &amp; Interactive SQL Lab
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-[#141419] border border-[#D7E2EA]/10 p-3.5">
                        <p className="text-xs font-semibold text-[#D7E2EA]">
                          Topic Modules
                        </p>
                        <p className="text-[11px] text-[#D7E2EA]/60 mt-1">
                          Structured Big Data architecture, pipelines &amp; concepts
                        </p>
                      </div>
                      <div className="rounded-2xl bg-[#141419] border border-[#D7E2EA]/10 p-3.5">
                        <p className="text-xs font-semibold text-[#D7E2EA]">
                          SQL Execution Panel
                        </p>
                        <p className="text-[11px] text-[#D7E2EA]/60 mt-1">
                          Write and run structured queries directly in-browser
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#D7E2EA]/60 pt-3 border-t border-[#D7E2EA]/10">
                  <span>Responsive Educational Interface</span>
                  <span>Web &amp; Analytics</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.article>
    </div>
  );
};