import BackLink from "@/components/BackLink";
import CourseBanner from "@/components/CourseBanner";
import Image from "next/image";

export default function AIRadarRemoteSensingPage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10 pt-20 sm:pt-24">
      <BackLink href="/masters" />

      <div className="mt-8 mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          AI for Radar and Remote Sensing
        </h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-1">
          ECE556 · Colorado State University
        </h2>
        <p className="text-foreground/60 mb-4">
          Spring 2026 | Fort Collins, CO · Accelerated MSEE credit
        </p>

        <CourseBanner motif="radar" className="mb-8" />
      </div>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Why I took it</h3>
        <p className="text-foreground/80 leading-relaxed">
          Dual-counted toward the accelerated MSEE during the BSEE. Aerospace
          concentration, plus RF work at FIRST RF — I wanted AI on the sensing
          side, not another generic deep-learning survey. This course puts
          models on radar and satellite data: precipitation detection,
          classification, estimation, and prediction.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">What I learned</h3>
        <div className="space-y-6">
          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">ML fundamentals and radar</h4>
            <p className="text-foreground/80">
              Features, labels, capacity, hyperparameters, and
              train/validation/test — then modern radar and remote-sensing
              systems, how you read the observations, and where the
              applications actually live.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Classical and convolutional models</h4>
            <p className="text-foreground/80">
              Decision trees and random forests, ANNs, SVMs, self-organizing
              maps, neuro-fuzzy methods and k-means, then CNNs, transfer
              learning, and U-Net — the stack used on precipitation and
              related products.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Sequence models and tools</h4>
            <p className="text-foreground/80">
              RNNs, LSTMs, and GANs, with hands-on work in Scikit-learn,
              TensorFlow, and PyTorch, and a final project on an approved
              radar or remote-sensing problem.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Selected work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/masters/ai-radar-remote-sensing/hero-hydroclass.png"
                alt="Fuzzy-logic hydrometeor classification RHI"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">
              Fuzzy-logic hydrometeor classification RHI.
            </p>
          </div>
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/masters/ai-radar-remote-sensing/reflectivity.png"
                alt="Radar reflectivity RHI"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">
              Reflectivity RHI through a convective core.
            </p>
          </div>
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/masters/ai-radar-remote-sensing/polarimetric-inputs.png"
                alt="Four-panel polarimetric radar inputs"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">
              Polarimetric inputs: Z, ZDR, KDP, and ρhv.
            </p>
          </div>
          <div className="space-y-2 md:col-span-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/masters/ai-radar-remote-sensing/confusion-recall.png"
                alt="Fuzzy-logic versus k-means hydroclass comparison"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">
              Fuzzy-logic hydroclass versus k-means, recall-normalized.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Topics</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Radar",
            "Remote Sensing",
            "CNNs",
            "U-Net",
            "RNN / LSTM",
            "GANs",
          ].map((topic) => (
            <span
              key={topic}
              className="px-3 py-1 bg-foreground/10 text-foreground/80 rounded-full text-sm border border-foreground/20"
            >
              {topic}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
