"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Check, Loader2, Car, Wrench, Clock, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Invalid email address."),
    phone: z.string().min(10, "Phone number must be at least 10 digits."),
    vehicleType: z.string().min(1, "Please select a vehicle type."),
    serviceType: z.string().min(1, "Please select a service."),
    date: z.date(), // Required by default
    description: z.string().optional(),
    address: z.string().min(5, "Please provide the service location."),
});

const vehicleTypes = [
    { id: "sedan", label: "Sedan / Hatch", icon: Car },
    { id: "suv", label: "SUV / 4WD", icon: Car },
    { id: "ute", label: "Ute / Van", icon: Car },
    { id: "luxury", label: "Luxury / Euro", icon: Car },
    { id: "motorcycle", label: "Motorcycle", icon: BikeIcon },
];

function BikeIcon(props: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  {...props}><circle cx="5.5" cy="17.5" r="3.5" /><circle cx="18.5" cy="17.5" r="3.5" /><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2" /></svg>
    )
}

const serviceTypes = [
    "Use Logbook Service",
    "Minor Service",
    "Major Service",
    "Brake Pads & Rotors",
    "Battery Replacement",
    "Diagnostics / Scan",
    "Suspension Check",
    "Pre-Purchase Inspection",
    "Other (Describe below)"
];

export function BookingSection() {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            address: "",
            description: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                console.error("Submission failed");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    const nextStep = () => {
        const fieldsToValidate = step === 1
            ? ['vehicleType', 'serviceType']
            : step === 2
                ? ['date', 'address']
                : [];

        // @ts-ignore
        form.trigger(fieldsToValidate).then((isValid) => {
            if (isValid) setStep(step + 1);
        });
    };

    const prevStep = () => setStep(step - 1);

    if (isSuccess) {
        return (
            <section id="booking" className="py-24 bg-zinc-950 flex items-center justify-center min-h-[600px]">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center p-8 bg-zinc-900 border border-green-500/30 rounded-3xl max-w-md mx-4"
                >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                        <Check className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Booking Received!</h3>
                    <p className="text-zinc-400 mb-8">
                        Thank you, {form.getValues("name")}. <br />
                        <span className="text-yellow-500 font-medium">Demo Mode:</span> Your booking has been processed in simulation.
                        <br />
                        <span className="text-sm text-zinc-500 mt-2 block">(To send real emails, we need to configure an Email Server API key)</span>
                    </p>
                    <Button onClick={() => { setIsSuccess(false); setStep(1); form.reset(); }} className="w-full bg-zinc-800 hover:bg-zinc-700">
                        Book Another Vehicle
                    </Button>
                </motion.div>
            </section>
        );
    }

    return (
        <section id="booking" className="py-24 bg-zinc-950 relative">
            {/* Background Gradients */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-zinc-900 to-transparent pointer-events-none" />

            <div className="container px-4 md:px-8 max-w-5xl"> {/* Centered form container */}
                <div className="mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Book Your <span className="text-gradient">Service</span></h2>
                        <p className="text-zinc-400">Simple 3-step booking process. We come to you.</p>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Steps Indicator - Desktop */}
                    <div className="hidden lg:flex flex-col gap-8 w-1/4 pt-8 sticky top-24">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className={cn("flex items-center gap-4 transition-all duration-300", step === s ? "opacity-100 translate-x-2" : "opacity-40")}>
                                <div className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center font-bold border-2",
                                    step === s ? "border-rose-500 bg-rose-500/20 text-rose-500" :
                                        step > s ? "border-rose-500 bg-rose-500 text-white" : "border-zinc-700 text-zinc-500"
                                )}>
                                    {step > s ? <Check className="w-5 h-5" /> : s}
                                </div>
                                <span className={cn("font-medium", step === s ? "text-white" : "text-zinc-500")}>
                                    {s === 1 ? "Vehicle & Service" : s === 2 ? "Time & Location" : "Contact Details"}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Form Area by Full Width on Mobile/Tablet */}
                    <div className="w-full lg:w-3/4">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <Card className="bg-zinc-900/50 border-white/10 backdrop-blur-md overflow-hidden min-h-[500px] flex flex-col">
                                    <CardContent className="p-6 md:p-8 flex-1">
                                        <AnimatePresence mode="wait">
                                            {step === 1 && (
                                                <motion.div
                                                    key="step1"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    className="space-y-6"
                                                >
                                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                        {vehicleTypes.map((type) => (
                                                            <div
                                                                key={type.id}
                                                                onClick={() => form.setValue("vehicleType", type.id)}
                                                                className={cn(
                                                                    "cursor-pointer p-4 rounded-xl border transition-all hover:bg-zinc-800 flex flex-col items-center gap-3 text-center",
                                                                    form.watch("vehicleType") === type.id
                                                                        ? "border-rose-500 bg-rose-500/10 text-rose-500 shadow-[0_0_15px_rgba(225,29,72,0.2)]"
                                                                        : "border-zinc-800 text-zinc-400"
                                                                )}
                                                            >
                                                                <type.icon className="w-8 h-8" />
                                                                <span className="text-sm font-medium">{type.label}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <FormField
                                                        control={form.control}
                                                        name="serviceType"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-zinc-300">Service Required</FormLabel>
                                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                    <FormControl>
                                                                        <SelectTrigger className="bg-zinc-950 border-zinc-800 h-12">
                                                                            <SelectValue placeholder="Select service type" />
                                                                        </SelectTrigger>
                                                                    </FormControl>
                                                                    <SelectContent className="bg-zinc-900 border-zinc-800 max-h-[200px]">
                                                                        {serviceTypes.map((service) => (
                                                                            <SelectItem key={service} value={service} className="focus:bg-zinc-800 focus:text-white cursor-pointer">{service}</SelectItem>
                                                                        ))}
                                                                    </SelectContent>
                                                                </Select>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </motion.div>
                                            )}

                                            {step === 2 && (
                                                <motion.div
                                                    key="step2"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    className="space-y-6"
                                                >
                                                    <FormField
                                                        control={form.control}
                                                        name="date"
                                                        render={({ field }) => (
                                                            <FormItem className="flex flex-col">
                                                                <FormLabel className="text-zinc-300">Preferred Date</FormLabel>
                                                                <Popover>
                                                                    <PopoverTrigger asChild>
                                                                        <FormControl>
                                                                            <Button
                                                                                variant={"outline"}
                                                                                className={cn(
                                                                                    "h-12 w-full pl-3 text-left font-normal bg-zinc-950 border-zinc-800 hover:bg-zinc-900 hover:text-white",
                                                                                    !field.value && "text-muted-foreground"
                                                                                )}
                                                                            >
                                                                                {field.value ? (
                                                                                    format(field.value, "PPP")
                                                                                ) : (
                                                                                    <span>Pick a date</span>
                                                                                )}
                                                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                            </Button>
                                                                        </FormControl>
                                                                    </PopoverTrigger>
                                                                    <PopoverContent className="w-auto p-0 bg-zinc-900 border-zinc-800 z-[9999]" align="start">
                                                                        <Calendar
                                                                            mode="single"
                                                                            selected={field.value}
                                                                            onSelect={field.onChange}
                                                                            disabled={(date) => {
                                                                                const today = new Date();
                                                                                today.setHours(0, 0, 0, 0);
                                                                                return date < today;
                                                                            }}
                                                                            initialFocus
                                                                            className="bg-zinc-900 text-zinc-100"
                                                                        />
                                                                    </PopoverContent>
                                                                </Popover>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <FormField
                                                        control={form.control}
                                                        name="address"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-zinc-300">Service Location</FormLabel>
                                                                <FormControl>
                                                                    <div className="relative">
                                                                        <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-zinc-500" />
                                                                        <Input placeholder="Enter your address (Mount Druitt & Surrounds)" className="pl-10 h-12 bg-zinc-950 border-zinc-800" {...field} />
                                                                    </div>
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </motion.div>
                                            )}

                                            {step === 3 && (
                                                <motion.div
                                                    key="step3"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    className="space-y-6"
                                                >
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <FormField
                                                            control={form.control}
                                                            name="name"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel className="text-zinc-300">Full Name</FormLabel>
                                                                    <FormControl>
                                                                        <Input placeholder="John Doe" className="h-12 bg-zinc-950 border-zinc-800" {...field} />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={form.control}
                                                            name="phone"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel className="text-zinc-300">Phone Number</FormLabel>
                                                                    <FormControl>
                                                                        <Input type="tel" placeholder="0400 000 000" className="h-12 bg-zinc-950 border-zinc-800" {...field} />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </div>
                                                    <FormField
                                                        control={form.control}
                                                        name="email"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-zinc-300">Email Address</FormLabel>
                                                                <FormControl>
                                                                    <Input type="email" placeholder="john@example.com" className="h-12 bg-zinc-950 border-zinc-800" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name="description"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-zinc-300">Issue Description (Optional)</FormLabel>
                                                                <FormControl>
                                                                    <Textarea placeholder="Describe the problem..." className="min-h-[100px] bg-zinc-950 border-zinc-800" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </CardContent>

                                    <div className="p-6 border-t border-white/5 bg-zinc-950/50 flex justify-between">
                                        {step > 1 ? (
                                            <Button type="button" variant="ghost" onClick={prevStep} className="hover:bg-zinc-800 text-zinc-300">
                                                Back
                                            </Button>
                                        ) : (
                                            <div></div>
                                        )}

                                        {step < 3 ? (
                                            <Button type="button" onClick={nextStep} className="bg-rose-600 hover:bg-rose-700 px-8">
                                                Next Step
                                            </Button>
                                        ) : (
                                            <Button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-500 hover:to-orange-500 px-8">
                                                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Check className="w-4 h-4 mr-2" />}
                                                Confirm Booking
                                            </Button>
                                        )}
                                    </div>
                                </Card>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}
