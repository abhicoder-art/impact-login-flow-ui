
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContributionFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContributionForm: React.FC<ContributionFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    category: '',
    summary: '',
    details: '',
    attachments: null as File | null
  });
  const { toast } = useToast();

  const impactCategories = [
    'Innovation',
    'Process Improvement',
    'Collaboration',
    'Customer Service',
    'Cost Reduction',
    'Quality Enhancement',
    'Training & Development',
    'Problem Solving'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.category || !formData.summary) {
      toast({
        title: "Missing Information",
        description: "Please fill in the required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Contribution Submitted! 🎉",
      description: "Your contribution has been sent to your manager for review. You'll be notified when it's reviewed.",
    });

    // Reset form and close
    setFormData({
      category: '',
      summary: '',
      details: '',
      attachments: null
    });
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, attachments: file });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Submit Your Contribution ✍️
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Let's get started! Tell us about your latest achievement!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Impact Category */}
          <div className="space-y-2">
            <Label htmlFor="category" className="text-sm font-medium text-gray-700">
              Impact Category *
            </Label>
            <Select 
              value={formData.category} 
              onValueChange={(value) => setFormData({ ...formData, category: value })}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select the type of impact you made" />
              </SelectTrigger>
              <SelectContent>
                {impactCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Contribution Summary */}
          <div className="space-y-2">
            <Label htmlFor="summary" className="text-sm font-medium text-gray-700">
              Contribution Summary *
            </Label>
            <Input
              id="summary"
              placeholder="e.g., Automated a task that saved 2 hours a week"
              value={formData.summary}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              className="w-full"
            />
          </div>

          {/* Detailed Description */}
          <div className="space-y-2">
            <Label htmlFor="details" className="text-sm font-medium text-gray-700">
              Detailed Description (Optional)
            </Label>
            <Textarea
              id="details"
              placeholder="Provide more details about your contribution, the process, and the impact..."
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              rows={4}
              className="w-full"
            />
          </div>

          {/* File Upload */}
          <div className="space-y-2">
            <Label htmlFor="attachments" className="text-sm font-medium text-gray-700">
              Attachments (Optional)
            </Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <input
                id="attachments"
                type="file"
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
              />
              <Label 
                htmlFor="attachments" 
                className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium"
              >
                Click to upload files
              </Label>
              <p className="text-gray-500 text-sm mt-1">
                Upload relevant documents or images (PDF, DOC, TXT, JPG, PNG)
              </p>
              {formData.attachments && (
                <p className="text-green-600 text-sm mt-2">
                  File selected: {formData.attachments.name}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="px-6"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl transition-all duration-200 hover:scale-105"
            >
              <Send className="h-4 w-4 mr-2" />
              Submit for Review
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContributionForm;
