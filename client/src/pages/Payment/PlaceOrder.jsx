import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import OrderSummary from "../../components/Payment/OrderSummary";
import PriceBreakDown from "../../components/Payment/PriceBreakDown";
import { useEffect, useState } from "react";

const PROCESSING_STEPS = [
    { id: 1, name: 'Validating Payment Info', duration: 2000 },
    { id: 2, name: 'Processing Transaction', duration: 3000 },
    { id: 3, name: 'Confirming Order', duration: 2000 },
]

const PlaceOrder = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isProcessing, setIsProcessing] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setIsProcessing(true);
        let stepIndex = 0;
        const processSteps = () => {
            if (stepIndex < PROCESSING_STEPS.length) {
                setCurrentStep(stepIndex)
                const delay = PROCESSING_STEPS[stepIndex].duration

                setTimeout(() => {
                    stepIndex += 1
                    processSteps()
                }, delay)
            } else {
                navigate("/payment-success")
            }
        }
        processSteps()
            ;
    }, []);
    return (
        <>
            <Navbar />
            <main className="mt-16">
                <div className="min-h-screen bg-white">
                    <header className="border-b border-gray-200 bg-gray-100">
                        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
                            <h1 className="text-2xl font-bold text-gray-900">Processing Payment</h1>
                            <p className="mt-1 text-sm text-gray-700">Step 2 of 3: Securely processing your payment</p>
                        </div>
                    </header>
                    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                        <div className="grid gap-8 lg:grid-cols-3">
                            <div className="lg:col-span-2 space-y-8">
                                <div className="rounded-lg border border-gray-200 bg-gray-100 p-8">
                                    <h2 className="mb-8 text-xl font-semibold text-gray-900">
                                        Processing Steps
                                    </h2>
                                    <div className="space-y-6">
                                        {PROCESSING_STEPS.map((step, idx) => (
                                            <div key={step.id} className="relative">
                                                <div className="flex items-start gap-4">
                                                    <div
                                                        className={`mt-1 h-8 w-8 rounded-full flex items-center justify-center font-semibold text-sm ${idx < currentStep
                                                            ? 'bg-green-600 text-white'
                                                            : idx === currentStep
                                                                ? 'bg-primary text-primary-foreground animate-pulse'
                                                                : 'bg-muted text-muted-foreground'
                                                            }`}
                                                    >
                                                        {idx < currentStep ? '✔️' : step.id}
                                                    </div>

                                                    <div>
                                                        <p
                                                            className={`font-medium ${idx <= currentStep
                                                                ? 'text-foreground'
                                                                : 'text-muted-foreground'
                                                                }`}
                                                        >
                                                            {step.name}
                                                        </p>
                                                        {idx === currentStep && (
                                                            <div className="mt-2 flex items-center gap-2">
                                                                <div className="flex gap-1">
                                                                    <div className="h-2 w-2 rounded-full bg-primary animate-bounce" />
                                                                    <div
                                                                        className="h-2 w-2 rounded-full bg-primary animate-bounce"
                                                                        style={{ animationDelay: '0.1s' }}
                                                                    />
                                                                    <div
                                                                        className="h-2 w-2 rounded-full bg-primary animate-bounce"
                                                                        style={{ animationDelay: '0.2s' }}
                                                                    />
                                                                </div>
                                                                <span className="text-xs text-muted-foreground">
                                                                    Processing...
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                {idx < PROCESSING_STEPS.length - 1 && (
                                                    <div className="absolute left-4 top-8 h-6 w-0.5 bg-muted" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="rounded-lg border border-border bg-muted p-4">
                                    <p className="text-sm text-muted-foreground">
                                        Your order details are locked during processing. Do not refresh or
                                        navigate away.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <OrderSummary />
                                <PriceBreakDown />
                            </div>
                        </div>
                    </main>
                </div >
            </main >
        </>
    );
};

export default PlaceOrder;