import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Github,
  Sparkles,
  Loader,
  Copy,
  Check,
  StopCircle,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";

const Hero1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSentence, setCurrentSentence] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCorrected, setShowCorrected] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const demoSentences = [
    {
      original: "the quick brown fox jumps over the lazy dog and runs fast",
      corrected:
        "The quick brown fox jumps over the lazy dog and runs swiftly.",
    },
    {
      original: "i think this is a good idea but we should discuss it more",
      corrected:
        "I believe this is an excellent idea, but we should discuss it further.",
    },
    {
      original: "the weather today is nice and sunny with blue sky",
      corrected:
        "The weather today is beautiful and sunny with clear blue skies.",
    },
    {
      original: "please send me the documents when you have time to do it",
      corrected: "Please send me the documents when you have the opportunity.",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const startDemo = () => {
      // Reset all states
      setIsTyping(true);
      setIsSelected(false);
      setShowCorrected(false);
      setTypingText("");

      // Type the text character by character - much faster
      const text = demoSentences[currentSentence].original;
      let i = 0;

      const typeInterval = setInterval(() => {
        if (i < text.length) {
          setTypingText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);

          // Wait a bit, then select text
          setTimeout(() => {
            setIsSelected(true);

            // Wait for selection, then start refining
            setTimeout(() => {
              setIsAnimating(true);

              // Show refined text after processing
              setTimeout(() => {
                setShowCorrected(true);
                setIsAnimating(false);
                setIsSelected(false);

                // Wait before next cycle
                setTimeout(() => {
                  setCurrentSentence(
                    (prev) => (prev + 1) % demoSentences.length,
                  );
                }, 2500);
              }, 1800);
            }, 1200);
          }, 800);
        }
      }, 25); // Much faster typing speed
    };

    const interval = setInterval(startDemo, 8500);
    startDemo(); // Start immediately

    return () => clearInterval(interval);
  }, [currentSentence]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Extended background gradient with enhanced grid */}
      <div className="cosmic-gradient cosmic-grid-enhanced min-h-screen flex flex-col justify-center items-center relative ">
        {/* Enhanced cosmic glow - moved up */}

        <div className="cosmic-glow-enhanced absolute inset-0 -top-20"></div>
        {/* Hero Content */}
        <div
          className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="gap-2 cosmic-glass">
              <Loader className="h-3 w-3 animate-spin text-primary" />
              macOS Menubar App
              <Sparkles className="h-3 w-3" />
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground mb-6 max-w-5xl">
            Refine your writing with a single{" "}
            <span className="text-green-500">shortcut</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-balance">
            Instantly clean up copied text using Auraui. Press{" "}
            <kbd className="px-2 py-1 text-sm bg-muted rounded font-mono">
              Cmd+Shift+E
            </kbd>{" "}
            anywhere on macOS to replace messy text with a clearer, corrected
            version.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 mb-16">
            <Button
              size="lg"
              className="gap-2 h-12 px-8"
              onClick={() => setShowPopup(true)}
            >
              <Download className="h-5 w-5" />
              Download for macOS
            </Button>
            <Button variant="outline" size="lg" className="gap-2 h-12 px-8">
              <Github className="h-5 w-5" />
              View on GitHub
            </Button>
          </div>

          {/* Demo Box - Made taller */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative">
              {/* Window-like demo box */}
              <div className="bg-card/90 backdrop-blur-md rounded-xl border border-border/50 shadow-2xl overflow-hidden">
                {/* Window header */}
                <div className="bg-muted/30 px-4 py-3 border-b border-border/30 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                  </div>
                  <div className="text-sm text-muted-foreground ml-4">
                    Text Editor
                  </div>
                </div>

                {/* Content area - Made taller */}
                <div className="p-8 min-h-[180px] flex items-center justify-center">
                  <div className="w-full max-w-2xl">
                    <div
                      className={`text-lg leading-relaxed transition-all duration-500 ${
                        isAnimating ? "bg-accent/30 rounded-md p-3" : ""
                      } ${isSelected ? "bg-blue-500/20 rounded-md p-3" : ""}`}
                    >
                      {showCorrected ? (
                        <span className="text-foreground">
                          {demoSentences[currentSentence].corrected}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">
                          {typingText}
                          {isTyping && <span className="animate-pulse">|</span>}
                        </span>
                      )}
                    </div>

                    {/* Status indicator */}
                    <div className="flex items-center gap-2 mt-4 text-sm">
                      {isAnimating ? (
                        <>
                          <Loader className="h-4 w-4 animate-spin text-primary" />
                          <span className="text-muted-foreground">
                            Refining text...
                          </span>
                        </>
                      ) : showCorrected ? (
                        <>
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-muted-foreground">
                            Text refined
                          </span>
                        </>
                      ) : isSelected ? (
                        <>
                          <Copy className="h-4 w-4 text-blue-500" />
                          <span className="text-muted-foreground">
                            Text selected
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">
                            Press Cmd+Shift+E to refine
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect below the demo box - moved up and positioned better */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[600px] h-[120px] opacity-30 bg-primary blur-[80px] rounded-full -z-20"></div>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <Card className="border border-border/50 bg-card/90 backdrop-blur-sm transition-all duration-300 w-full max-w-sm hover:bg-card hover:border-primary/30 hover:scale-[1.02] hover:shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mx-auto mb-4">
                <StopCircle />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                Coming Soon
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                This feature is not available yet. Stay tuned for updates!
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-4 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition"
              >
                Got it!
              </button>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
};

export default Hero1;
