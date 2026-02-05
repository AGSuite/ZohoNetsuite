export async function submitPricingQuote(data: any) {
    console.log('Submitting pricing quote:', data);
    // Mock a successful submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    return { ok: true, error: null as string | null };
}
