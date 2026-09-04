import BackLink from "@/components/BackLink";
import CourseBanner from "@/components/CourseBanner";
import Image from "next/image";

export default function AdaptiveSystemsMLPage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10 pt-20 sm:pt-24">
      <BackLink href="/masters" />

      <div className="mt-8 mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          Adaptive Systems &amp; Machine Learning
        </h1>
        <h2 className="text-xl font-semibold text-foreground/80 mb-1">
          ECE553 · Colorado State University
        </h2>
        <p className="text-foreground/60 mb-4">
          Spring 2026 | Fort Collins, CO · Accelerated MSEE credit
        </p>

        <CourseBanner motif="adaptive-ml" className="mb-8" />
      </div>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Why I took it</h3>
        <p className="text-foreground/80 leading-relaxed">
          Spring of senior year, dual-counted toward the accelerated MSEE. I
          already had signals and random variables (ECE312 / ECE303). I wanted
          the algorithms themselves — adaptive rules, discriminants, kernels —
          not just calling a library. This is the course that made later
          applied-AI work (radar, power systems) sit on something other than
          a black box.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">What I learned</h3>
        <div className="space-y-6">
          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Adaptive learning rules</h4>
            <p className="text-foreground/80">
              LMS, perceptron, and delta-rule updates, plus regularization —
              how a model actually moves when you show it an error, and what
              you pay for making it move too freely.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">
              Pattern recognition and kernels
            </h4>
            <p className="text-foreground/80">
              Statistical classification, supervised and unsupervised
              learning, layered machines, structural risk minimization, and
              kernel machines — including radial basis functions and
              probabilistic nets.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-5 sm:p-6">
            <h4 className="font-semibold mb-2">Deep models and projects</h4>
            <p className="text-foreground/80">
              Back-propagation, CNNs, self-organization and associative
              memory, GANs, recurrent nets and transformers, with MATLAB and
              Python computer projects and a final system you design,
              implement, and measure.
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
                src="/masters/adaptive-systems-ml/hero-cnn-vs-mlp.png"
                alt="CNN versus MLP test accuracy on CIFAR-10"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">
              CNN versus MLP test accuracy on CIFAR-10.
            </p>
          </div>
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/masters/adaptive-systems-ml/confusion-adam-ce.png"
                alt="CIFAR-10 confusion matrix for a CNN trained with Adam and cross-entropy"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">
              CIFAR-10 confusion matrix, CNN with Adam and cross-entropy.
            </p>
          </div>
          <div className="space-y-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/masters/adaptive-systems-ml/mlp-vs-svm.png"
                alt="MLP versus SVM test accuracy"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">
              MLP versus kernel SVM test accuracy.
            </p>
          </div>
          <div className="space-y-2 md:col-span-2">
            <div className="relative h-64 rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
              <Image
                src="/masters/adaptive-systems-ml/lms-learning-curve.png"
                alt="LMS versus Wiener-Hopf learning curve"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-foreground/60 text-center">
              LMS versus Wiener-Hopf on an AR predictor.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Topics</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "LMS",
            "Neural Networks",
            "Kernel Machines",
            "CNNs",
            "GANs",
            "Transformers",
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
