export default function PageLoadingSkeleton() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-8" aria-hidden>
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-batech-cyan border-t-transparent animate-spin" />
        <p className="text-sm text-batech-silver">Yükleniyor...</p>
      </div>
    </div>
  );
}
